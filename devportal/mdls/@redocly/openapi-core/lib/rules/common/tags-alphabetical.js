"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsAlphabetical = void 0;
const TagsAlphabetical = () => {
    return {
        DefinitionRoot(root, { report, location }) {
            if (!root.tags)
                return;
            for (let i = 0; i < root.tags.length - 1; i++) {
                if (root.tags[i].name > root.tags[i + 1].name) {
                    report({
                        message: 'The `tags` array should be in alphabetical order.',
                        location: location.child(['tags', i]),
                    });
                }
            }
        },
    };
};
exports.TagsAlphabetical = TagsAlphabetical;
