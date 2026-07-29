# Product Science Documentation

To get started, please proceed to [Product Science Documentation Homepage](https://product-science.github.io/).

## Build

Clone repo:

```
git clone https://github.com/product-science/docs
```

A setup script to setting up your environment is here:

```
./buildtools/mkdocs-setup.sh
```

### Run locally

To run locally you should provide Github token to access latest release:

```
export PS_GITHUB_TOKEN=ghp_...
```

Then serve on localhost:

```
mkdocs serve
```

Or if `mkdocs` is not available:

```
python3 -m mkdocs serve
```

### Deploy

`Deploy` CICD pileline deploys documentation automatically

py -m mkdocs serve - запуск сервера разработки
py -m mkdocs build - сборка сайта
py -m pip install <package>

py -m mkdocs build --clean
Documentation is automatically deployed to GitHub Pages via GitHub Actions when you push to `main`, `master`, or `dev` branches.

The deployment workflow:
- Builds the MkDocs site
- Deploys to the `gh-pages` branch
- Configures the custom domain (gonka.me) via CNAME

You can also manually trigger the deployment from the Actions tab in GitHub.

**Note:** Make sure GitHub Pages is enabled in your repository settings:
1. Go to Settings → Pages
2. Source should be set to "GitHub Actions" (or "Deploy from a branch" using `gh-pages` branch)
