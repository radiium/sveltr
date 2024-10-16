export default {
    useTabs: false,
    tabWidth: 4,
    singleQuote: true,
    trailingComma: 'none',
    semi: true,
    printWidth: 110,
    plugins: ['prettier-plugin-svelte'],
    overrides: [
        {
            files: '*.svelte',
            options: {
                parser: 'svelte'
            }
        }
    ]
};
