"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeDomain = exports.configuredDomains = exports.hasCertificateFor = exports.certificateFor = exports.uninstall = void 0;
const tslib_1 = require("tslib");
const fs_1 = require("fs");
const debug_1 = tslib_1.__importDefault(require("debug"));
const command_exists_1 = require("command-exists");
const rimraf_1 = tslib_1.__importDefault(require("rimraf"));
const constants_1 = require("./constants");
const platforms_1 = tslib_1.__importDefault(require("./platforms"));
const certificate_authority_1 = tslib_1.__importStar(require("./certificate-authority"));
Object.defineProperty(exports, "uninstall", { enumerable: true, get: function () { return certificate_authority_1.uninstall; } });
const certificates_1 = tslib_1.__importDefault(require("./certificates"));
const user_interface_1 = tslib_1.__importDefault(require("./user-interface"));
const debug = debug_1.default('devcert');
/**
 * Request an SSL certificate for the given app name signed by the devcert root
 * certificate authority. If devcert has previously generated a certificate for
 * that app name on this machine, it will reuse that certificate.
 *
 * If this is the first time devcert is being run on this machine, it will
 * generate and attempt to install a root certificate authority.
 *
 * Returns a promise that resolves with { key, cert }, where `key` and `cert`
 * are Buffers with the contents of the certificate private key and certificate
 * file, respectively
 *
 * If `options.getCaBuffer` is true, return value will include the ca certificate data
 * as { ca: Buffer }
 *
 * If `options.getCaPath` is true, return value will include the ca certificate path
 * as { caPath: string }
 */
function certificateFor(requestedDomains, options = {}) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const domains = Array.isArray(requestedDomains) ? requestedDomains : [requestedDomains];
        if (domains.some((d) => constants_1.VALID_IP.test(d))) {
            throw new Error('IP addresses are not supported currently');
        }
        domains.forEach((domain) => {
            if (!constants_1.VALID_DOMAIN.test(domain)) {
                throw new Error(`"${domain}" is not a valid domain name.`);
            }
        });
        const domainPath = constants_1.getStableDomainPath(domains);
        debug(`Certificate requested for ${domains}. Skipping certutil install: ${Boolean(options.skipCertutilInstall)}. Skipping hosts file: ${Boolean(options.skipHostsFile)}`);
        if (options.ui) {
            Object.assign(user_interface_1.default, options.ui);
        }
        if (!constants_1.isMac && !constants_1.isLinux && !constants_1.isWindows) {
            throw new Error(`Platform not supported: "${process.platform}"`);
        }
        if (!command_exists_1.sync('openssl')) {
            throw new Error('OpenSSL not found: OpenSSL is required to generate SSL certificates - make sure it is installed and available in your PATH');
        }
        let domainKeyPath = constants_1.pathForDomain(domainPath, `private-key.key`);
        let domainCertPath = constants_1.pathForDomain(domainPath, `certificate.crt`);
        if (!fs_1.existsSync(constants_1.rootCAKeyPath)) {
            debug('Root CA is not installed yet, so it must be our first run. Installing root CA ...');
            yield certificate_authority_1.default(options);
        }
        else if (options.getCaBuffer || options.getCaPath) {
            debug('Root CA is not readable, but it probably is because an earlier version of devcert locked it. Trying to fix...');
            yield certificate_authority_1.ensureCACertReadable(options);
        }
        if (!fs_1.existsSync(constants_1.pathForDomain(domainPath, `certificate.crt`))) {
            debug(`Can't find certificate file for ${domains}, so it must be the first request for ${domains}. Generating and caching ...`);
            yield certificates_1.default(domains);
        }
        if (!options.skipHostsFile) {
            domains.forEach((domain) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                yield platforms_1.default.addDomainToHostFileIfMissing(domain);
            }));
        }
        debug(`Returning domain certificate`);
        const ret = {
            key: fs_1.readFileSync(domainKeyPath),
            cert: fs_1.readFileSync(domainCertPath)
        };
        if (options.getCaBuffer)
            ret.ca = fs_1.readFileSync(constants_1.rootCACertPath);
        if (options.getCaPath)
            ret.caPath = constants_1.rootCACertPath;
        return ret;
    });
}
exports.certificateFor = certificateFor;
function hasCertificateFor(requestedDomains) {
    const domains = Array.isArray(requestedDomains) ? requestedDomains : [requestedDomains];
    const domainPath = constants_1.getStableDomainPath(domains);
    return fs_1.existsSync(constants_1.pathForDomain(domainPath, `certificate.crt`));
}
exports.hasCertificateFor = hasCertificateFor;
function configuredDomains() {
    return fs_1.readdirSync(constants_1.domainsDir);
}
exports.configuredDomains = configuredDomains;
function removeDomain(requestedDomains) {
    const domains = Array.isArray(requestedDomains) ? requestedDomains : [requestedDomains];
    const domainPath = constants_1.getStableDomainPath(domains);
    return rimraf_1.default.sync(constants_1.pathForDomain(domainPath));
}
exports.removeDomain = removeDomain;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSwyQkFBNEY7QUFDNUYsMERBQWdDO0FBQ2hDLG1EQUF1RDtBQUN2RCw0REFBNEI7QUFDNUIsMkNBV3FCO0FBQ3JCLG9FQUEwQztBQUMxQyx5RkFBdUc7QUFHOUYsMEZBSG1ELGlDQUFTLE9BR25EO0FBRmxCLDBFQUF1RDtBQUN2RCw4RUFBcUQ7QUFHckQsTUFBTSxLQUFLLEdBQUcsZUFBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBNkJyQzs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQkc7QUFDSCxTQUFzQixjQUFjLENBQW9CLGdCQUFtQyxFQUFFLFVBQWEsRUFBTzs7UUFDL0csTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3hGLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsb0JBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUN6QyxNQUFNLElBQUksS0FBSyxDQUFDLDBDQUEwQyxDQUFDLENBQUM7U0FDN0Q7UUFDRCxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDekIsSUFBSSxDQUFDLHdCQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUM5QixNQUFNLElBQUksS0FBSyxDQUFDLElBQUksTUFBTSwrQkFBK0IsQ0FBQyxDQUFDO2FBQzVEO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxNQUFNLFVBQVUsR0FBRywrQkFBbUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoRCxLQUFLLENBQUMsNkJBQTZCLE9BQU8sZ0NBQWdDLE9BQU8sQ0FBQyxPQUFPLENBQUMsbUJB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S0FBSyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3hGLE1BQU0sVUFBVSxHQUFHLCtCQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hELE9BQU8sZ0JBQU0sQ0FBQyxJQUFJLENBQUMseUJBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0FBQ2hELENBQUM7QUFKRCxvQ0FJQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlYWRGaWxlU3luYyBhcyByZWFkRmlsZSwgcmVhZGRpclN5bmMgYXMgcmVhZGRpciwgZXhpc3RzU3luYyBhcyBleGlzdHMgfSBmcm9tICdmcyc7XG5pbXBvcnQgY3JlYXRlRGVidWcgZnJvbSAnZGVidWcnO1xuaW1wb3J0IHsgc3luYyBhcyBjb21tYW5kRXhpc3RzIH0gZnJvbSAnY29tbWFuZC1leGlzdHMnO1xuaW1wb3J0IHJpbXJhZiBmcm9tICdyaW1yYWYnO1xuaW1wb3J0IHtcbiAgaXNNYWMsXG4gIGlzTGludXgsXG4gIGlzV2luZG93cyxcbiAgcGF0aEZvckRvbWFpbixcbiAgZ2V0U3RhYmxlRG9tYWluUGF0aCxcbiAgZG9tYWluc0RpcixcbiAgcm9vdENBS2V5UGF0aCxcbiAgcm9vdENBQ2VydFBhdGgsXG4gIFZBTElEX0RPTUFJTixcbiAgVkFMSURfSVBcbn0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IGN1cnJlbnRQbGF0Zm9ybSBmcm9tICcuL3BsYXRmb3Jtcyc7XG5pbXBvcnQgaW5zdGFsbENlcnRpZmljYXRlQXV0aG9yaXR5LCB7IGVuc3VyZUNBQ2VydFJlYWRhYmxlLCB1bmluc3RhbGwgfSBmcm9tICcuL2NlcnRpZmljYXRlLWF1dGhvcml0eSc7XG5pbXBvcnQgZ2VuZXJhdGVEb21haW5DZXJ0aWZpY2F0ZSBmcm9tICcuL2NlcnRpZmljYXRlcyc7XG5pbXBvcnQgVUksIHsgVXNlckludGVyZmFjZSB9IGZyb20gJy4vdXNlci1pbnRlcmZhY2UnO1xuZXhwb3J0IHsgdW5pbnN0YWxsIH07XG5cbmNvbnN0IGRlYnVnID0gY3JlYXRlRGVidWcoJ2RldmNlcnQnKTtcblxuZXhwb3J0IGludGVyZmFjZSBPcHRpb25zIC8qIGV4dGVuZHMgUGFydGlhbDxJQ2FCdWZmZXJPcHRzICYgSUNhUGF0aE9wdHM+ICAqLyB7XG4gIC8qKiBSZXR1cm4gdGhlIENBIGNlcnRpZmljYXRlIGRhdGE/ICovXG4gIGdldENhQnVmZmVyPzogYm9vbGVhbjtcbiAgLyoqIFJldHVybiB0aGUgcGF0aCB0byB0aGUgQ0EgY2VydGlmaWNhdGU/ICovXG4gIGdldENhUGF0aD86IGJvb2xlYW47XG4gIC8qKiBJZiBgY2VydHV0aWxgIGlzIG5vdCBpbnN0YWxsZWQgYWxyZWFkeSAoZm9yIHVwZGF0aW5nIG5zcyBkYXRhYmFzZXM7IGUuZy4gZmlyZWZveCksIGRvIG5vdCBhdHRlbXB0IHRvIGluc3RhbGwgaXQgKi9cbiAgc2tpcENlcnR1dGlsSW5zdGFsbD86IGJvb2xlYW4sXG4gIC8qKiBEbyBub3QgdXBkYXRlIHlvdXIgc3lzdGVtcyBob3N0IGZpbGUgd2l0aCB0aGUgZG9tYWluIG5hbWUgb2YgdGhlIGNlcnRpZmljYXRlICovXG4gIHNraXBIb3N0c0ZpbGU/OiBib29sZWFuLFxuICAvKiogVXNlciBpbnRlcmZhY2UgaG9va3MgKi9cbiAgdWk/OiBVc2VySW50ZXJmYWNlXG59XG5cbmludGVyZmFjZSBJQ2FCdWZmZXIge1xuICBjYTogQnVmZmVyO1xufVxuaW50ZXJmYWNlIElDYVBhdGgge1xuICBjYVBhdGg6IHN0cmluZztcbn1cbmludGVyZmFjZSBJRG9tYWluRGF0YSB7XG4gIGtleTogQnVmZmVyO1xuICBjZXJ0OiBCdWZmZXI7XG59XG50eXBlIElSZXR1cm5DYTxPIGV4dGVuZHMgT3B0aW9ucz4gPSBPWydnZXRDYUJ1ZmZlciddIGV4dGVuZHMgdHJ1ZSA/IElDYUJ1ZmZlciA6IGZhbHNlO1xudHlwZSBJUmV0dXJuQ2FQYXRoPE8gZXh0ZW5kcyBPcHRpb25zPiA9IE9bJ2dldENhUGF0aCddIGV4dGVuZHMgdHJ1ZSA/IElDYVBhdGggOiBmYWxzZTtcbnR5cGUgSVJldHVybkRhdGE8TyBleHRlbmRzIE9wdGlvbnMgPSB7fT4gPSAoSURvbWFpbkRhdGEpICYgKElSZXR1cm5DYTxPPikgJiAoSVJldHVybkNhUGF0aDxPPik7XG5cbi8qKlxuICogUmVxdWVzdCBhbiBTU0wgY2VydGlmaWNhdGUgZm9yIHRoZSBnaXZlbiBhcHAgbmFtZSBzaWduZWQgYnkgdGhlIGRldmNlcnQgcm9vdFxuICogY2VydGlmaWNhdGUgYXV0aG9yaXR5LiBJZiBkZXZjZXJ0IGhhcyBwcmV2aW91c2x5IGdlbmVyYXRlZCBhIGNlcnRpZmljYXRlIGZvclxuICogdGhhdCBhcHAgbmFtZSBvbiB0aGlzIG1hY2hpbmUsIGl0IHdpbGwgcmV1c2UgdGhhdCBjZXJ0aWZpY2F0ZS5cbiAqXG4gKiBJZiB0aGlzIGlzIHRoZSBmaXJzdCB0aW1lIGRldmNlcnQgaXMgYmVpbmcgcnVuIG9uIHRoaXMgbWFjaGluZSwgaXQgd2lsbFxuICogZ2VuZXJhdGUgYW5kIGF0dGVtcHQgdG8gaW5zdGFsbCBhIHJvb3QgY2VydGlmaWNhdGUgYXV0aG9yaXR5LlxuICpcbiAqIFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB7IGtleSwgY2VydCB9LCB3aGVyZSBga2V5YCBhbmQgYGNlcnRgXG4gKiBhcmUgQnVmZmVycyB3aXRoIHRoZSBjb250ZW50cyBvZiB0aGUgY2VydGlmaWNhdGUgcHJpdmF0ZSBrZXkgYW5kIGNlcnRpZmljYXRlXG4gKiBmaWxlLCByZXNwZWN0aXZlbHlcbiAqIFxuICogSWYgYG9wdGlvbnMuZ2V0Q2FCdWZmZXJgIGlzIHRydWUsIHJldHVybiB2YWx1ZSB3aWxsIGluY2x1ZGUgdGhlIGNhIGNlcnRpZmljYXRlIGRhdGFcbiAqIGFzIHsgY2E6IEJ1ZmZlciB9XG4gKiBcbiAqIElmIGBvcHRpb25zLmdldENhUGF0aGAgaXMgdHJ1ZSwgcmV0dXJuIHZhbHVlIHdpbGwgaW5jbHVkZSB0aGUgY2EgY2VydGlmaWNhdGUgcGF0aFxuICogYXMgeyBjYVBhdGg6IHN0cmluZyB9XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjZXJ0aWZpY2F0ZUZvcjxPIGV4dGVuZHMgT3B0aW9ucz4ocmVxdWVzdGVkRG9tYWluczogc3RyaW5nIHwgc3RyaW5nW10sIG9wdGlvbnM6IE8gPSB7fSBhcyBPKTogUHJvbWlzZTxJUmV0dXJuRGF0YTxPPj4ge1xuICBjb25zdCBkb21haW5zID0gQXJyYXkuaXNBcnJheShyZXF1ZXN0ZWREb21haW5zKSA/IHJlcXVlc3RlZERvbWFpbnMgOiBbcmVxdWVzdGVkRG9tYWluc107XG4gIGlmIChkb21haW5zLnNvbWUoKGQpID0+IFZBTElEX0lQLnRlc3QoZCkpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJUCBhZGRyZXNzZXMgYXJlIG5vdCBzdXBwb3J0ZWQgY3VycmVudGx5Jyk7XG4gIH1cbiAgZG9tYWlucy5mb3JFYWNoKChkb21haW4pID0+IHtcbiAgICBpZiAoIVZBTElEX0RPTUFJTi50ZXN0KGRvbWFpbikpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgXCIke2RvbWFpbn1cIiBpcyBub3QgYSB2YWxpZCBkb21haW4gbmFtZS5gKTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGRvbWFpblBhdGggPSBnZXRTdGFibGVEb21haW5QYXRoKGRvbWFpbnMpO1xuICBkZWJ1ZyhgQ2VydGlmaWNhdGUgcmVxdWVzdGVkIGZvciAke2RvbWFpbnN9LiBTa2lwcGluZyBjZXJ0dXRpbCBpbnN0YWxsOiAke0Jvb2xlYW4ob3B0aW9ucy5za2lwQ2VydHV0aWxJbnN0YWxsKX0uIFNraXBwaW5nIGhvc3RzIGZpbGU6ICR7Qm9vbGVhbihvcHRpb25zLnNraXBIb3N0c0ZpbGUpfWApO1xuXG4gIGlmIChvcHRpb25zLnVpKSB7XG4gICAgT2JqZWN0LmFzc2lnbihVSSwgb3B0aW9ucy51aSk7XG4gIH1cblxuICBpZiAoIWlzTWFjICYmICFpc0xpbnV4ICYmICFpc1dpbmRvd3MpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFBsYXRmb3JtIG5vdCBzdXBwb3J0ZWQ6IFwiJHtwcm9jZXNzLnBsYXRmb3JtfVwiYCk7XG4gIH1cblxuICBpZiAoIWNvbW1hbmRFeGlzdHMoJ29wZW5zc2wnKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignT3BlblNTTCBub3QgZm91bmQ6IE9wZW5TU0wgaXMgcmVxdWlyZWQgdG8gZ2VuZXJhdGUgU1NMIGNlcnRpZmljYXRlcyAtIG1ha2Ugc3VyZSBpdCBpcyBpbnN0YWxsZWQgYW5kIGF2YWlsYWJsZSBpbiB5b3VyIFBBVEgnKTtcbiAgfVxuXG4gIGxldCBkb21haW5LZXlQYXRoID0gcGF0aEZvckRvbWFpbihkb21haW5QYXRoLCBgcHJpdmF0ZS1rZXkua2V5YCk7XG4gIGxldCBkb21haW5DZXJ0UGF0aCA9IHBhdGhGb3JEb21haW4oZG9tYWluUGF0aCwgYGNlcnRpZmljYXRlLmNydGApO1xuXG4gIGlmICghZXhpc3RzKHJvb3RDQUtleVBhdGgpKSB7XG4gICAgZGVidWcoJ1Jvb3QgQ0EgaXMgbm90IGluc3RhbGxlZCB5ZXQsIHNvIGl0IG11c3QgYmUgb3VyIGZpcnN0IHJ1bi4gSW5zdGFsbGluZyByb290IENBIC4uLicpO1xuICAgIGF3YWl0IGluc3RhbGxDZXJ0aWZpY2F0ZUF1dGhvcml0eShvcHRpb25zKTtcbiAgfSBlbHNlIGlmIChvcHRpb25zLmdldENhQnVmZmVyIHx8IG9wdGlvbnMuZ2V0Q2FQYXRoKSB7XG4gICAgZGVidWcoJ1Jvb3QgQ0EgaXMgbm90IHJlYWRhYmxlLCBidXQgaXQgcHJvYmFibHkgaXMgYmVjYXVzZSBhbiBlYXJsaWVyIHZlcnNpb24gb2YgZGV2Y2VydCBsb2NrZWQgaXQuIFRyeWluZyB0byBmaXguLi4nKTtcbiAgICBhd2FpdCBlbnN1cmVDQUNlcnRSZWFkYWJsZShvcHRpb25zKTtcbiAgfVxuXG4gIGlmICghZXhpc3RzKHBhdGhGb3JEb21haW4oZG9tYWluUGF0aCwgYGNlcnRpZmljYXRlLmNydGApKSkge1xuICAgIGRlYnVnKGBDYW4ndCBmaW5kIGNlcnRpZmljYXRlIGZpbGUgZm9yICR7ZG9tYWluc30sIHNvIGl0IG11c3QgYmUgdGhlIGZpcnN0IHJlcXVlc3QgZm9yICR7ZG9tYWluc30uIEdlbmVyYXRpbmcgYW5kIGNhY2hpbmcgLi4uYCk7XG4gICAgYXdhaXQgZ2VuZXJhdGVEb21haW5DZXJ0aWZpY2F0ZShkb21haW5zKTtcbiAgfVxuXG4gIGlmICghb3B0aW9ucy5za2lwSG9zdHNGaWxlKSB7XG4gICAgZG9tYWlucy5mb3JFYWNoKGFzeW5jIChkb21haW4pID0+IHtcbiAgICAgIGF3YWl0IGN1cnJlbnRQbGF0Zm9ybS5hZGREb21haW5Ub0hvc3RGaWxlSWZNaXNzaW5nKGRvbWFpbik7XG4gICAgfSlcbiAgfVxuXG4gIGRlYnVnKGBSZXR1cm5pbmcgZG9tYWluIGNlcnRpZmljYXRlYCk7XG5cbiAgY29uc3QgcmV0ID0ge1xuICAgIGtleTogcmVhZEZpbGUoZG9tYWluS2V5UGF0aCksXG4gICAgY2VydDogcmVhZEZpbGUoZG9tYWluQ2VydFBhdGgpXG4gIH0gYXMgSVJldHVybkRhdGE8Tz47XG4gIGlmIChvcHRpb25zLmdldENhQnVmZmVyKSAocmV0IGFzIHVua25vd24gYXMgSUNhQnVmZmVyKS5jYSA9IHJlYWRGaWxlKHJvb3RDQUNlcnRQYXRoKTtcbiAgaWYgKG9wdGlvbnMuZ2V0Q2FQYXRoKSAocmV0IGFzIHVua25vd24gYXMgSUNhUGF0aCkuY2FQYXRoID0gcm9vdENBQ2VydFBhdGg7XG5cbiAgcmV0dXJuIHJldDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0NlcnRpZmljYXRlRm9yKHJlcXVlc3RlZERvbWFpbnM6IHN0cmluZyB8IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGRvbWFpbnMgPSBBcnJheS5pc0FycmF5KHJlcXVlc3RlZERvbWFpbnMpID8gcmVxdWVzdGVkRG9tYWlucyA6IFtyZXF1ZXN0ZWREb21haW5zXTtcbiAgY29uc3QgZG9tYWluUGF0aCA9IGdldFN0YWJsZURvbWFpblBhdGgoZG9tYWlucyk7XG4gIHJldHVybiBleGlzdHMocGF0aEZvckRvbWFpbihkb21haW5QYXRoLCBgY2VydGlmaWNhdGUuY3J0YCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlZERvbWFpbnMoKSB7XG4gIHJldHVybiByZWFkZGlyKGRvbWFpbnNEaXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRG9tYWluKHJlcXVlc3RlZERvbWFpbnM6IHN0cmluZyB8IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGRvbWFpbnMgPSBBcnJheS5pc0FycmF5KHJlcXVlc3RlZERvbWFpbnMpID8gcmVxdWVzdGVkRG9tYWlucyA6IFtyZXF1ZXN0ZWREb21haW5zXTtcbiAgY29uc3QgZG9tYWluUGF0aCA9IGdldFN0YWJsZURvbWFpblBhdGgoZG9tYWlucyk7XG4gIHJldHVybiByaW1yYWYuc3luYyhwYXRoRm9yRG9tYWluKGRvbWFpblBhdGgpKTtcbn1cbiJdfQ==