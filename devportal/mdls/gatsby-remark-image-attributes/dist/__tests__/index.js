"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const remark_1 = __importDefault(require("remark"));
const __1 = __importDefault(require("../"));
const constants_1 = require("../constants");
const gatsby_remark_images_json_1 = __importDefault(require("./__fixtures__/gatsby-remark-images.json"));
const warnDummy = jest.fn();
const parse = (content) => remark_1.default().parse(content);
const run = async (md, options = {}) => __1.default({
    markdownAST: typeof md === 'string' ? parse(md) : md,
    reporter: { warn: warnDummy }
}, options);
describe('Given the userOption styleAttributes', () => {
    it('warns about styleAttributes option being deprecated', async () => {
        const [[image]] = await run("![remove](./remove.png '#height=10px')", {
            styleAttributes: []
        });
        expect(warnDummy).toHaveBeenCalledWith('[gatsby-remark-image-attributes] The styleAttributes option is deprecated. The plugin uses all CSS properties.');
        expect(image.value).toMatchSnapshot();
    });
});
describe('Given mdAST Image nodes', () => {
    it('ignores images without title', async () => {
        const [[image]] = await run('![no title](./none.png)');
        expect(image).toBe(undefined);
    });
    it('ignores titles without key=value; pairs', async () => {
        const [[image]] = await run("![title](./title.png '#standard syntax title')");
        expect(image).toBe(undefined);
    });
    it('removes attributes from the title', async () => {
        const [[image]] = await run("![remove](./remove.png '#height=10px')");
        expect(image.title).toBe(null);
        expect(image.value).toMatchSnapshot();
    });
    it('sets title to value of a title= attribute', async () => {
        const [[image]] = await run("![fromAttribute](./attribute.png '#width=32px;title=title from attribute;color=blue')");
        expect(image.title).toEqual('title from attribute');
        expect(image.value).toMatchSnapshot();
    });
    it("doesn't trip over values with spaces", async () => {
        const [[image]] = await run("![gatsby](./gatsby-logo.png '#width=10px;color=rgb(10, 10, 10)')");
        expect(image.value).toMatch(/style="width: 10px;color: rgb\(10, 10, 10\);"/);
        expect(image.value).toMatchSnapshot();
    });
    it("adds plugin's CSS class to the image", async () => {
        const [[image]] = await run("![gatsby](./gatsby-logo.png '#width=10px;color=rgb(10, 10, 10)')");
        expect(image.value).toMatch(new RegExp(`^<img.*?class="${constants_1.CSS_CLASS}".*?\/>`));
        expect(image.value).toMatchSnapshot();
    });
});
describe('Given mdAST HTML nodes', () => {
    it('ignores nodes without <img>', async () => {
        const [, [image]] = await run(gatsby_remark_images_json_1.default.notAnImage.node);
        expect(image).toBe(undefined);
    });
    describe('from gatsby-remark-images', () => {
        let titleAttributeResult;
        let styleAttributesResult;
        beforeAll(async () => {
            titleAttributeResult = await run(gatsby_remark_images_json_1.default.titleAttribute.node);
            styleAttributesResult = await run(gatsby_remark_images_json_1.default.styleAttributes.node);
        });
        it('ignores titles without key=value; pairs', async () => {
            const [, [image]] = await run(gatsby_remark_images_json_1.default.noAttributes.node);
            expect(image.title).toEqual('No attributes, here');
            expect(image.value).toMatchSnapshot();
        });
        it('removes attributes from the title', async () => {
            const [, [image]] = styleAttributesResult;
            expect(image.title).toBe(null);
            expect(image.value).toMatch('title=""');
            expect(image.value).toMatchSnapshot();
        });
        it('sets title to value of a title= attribute', async () => {
            const [, [image]] = titleAttributeResult;
            expect(image.title).toEqual('Title from imageAttribute');
            expect(image.value).toMatch('title="Title from imageAttribute"');
            expect(image.value).toMatchSnapshot();
        });
        it("adds plugin's CSS class to the wrapper", async () => {
            const [, [image]] = titleAttributeResult;
            expect(image.value).toMatch(new RegExp(`^<span class="${constants_1.CSS_CLASS}"`));
            expect(image.value).toMatchSnapshot();
        });
        it('applies inline-block style to inline image wrappers', async () => {
            const [, [image]] = styleAttributesResult;
            const [, [inlineImage]] = titleAttributeResult;
            expect(inlineImage.value).toMatch(/^<span.*?style="display:inline-block.*?>/);
            expect(image.value).toMatch(/^<span.*?style="display:block.*?>/);
            expect(image.value).toMatchSnapshot();
        });
    });
});
