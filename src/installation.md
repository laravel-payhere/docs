# Installation

## Requirements

Laravel PayHere has a few requirements you should be aware of before installing:

-   Composer
-   PHP 8.2 or higher
-   Laravel v10.0 or higher
-   Filament v3.0 or higher

## Browser support

Laravel PayHere supports modern versions of the following browsers:

-   Apple Safari
-   Google Chrome
-   Microsoft Edge
-   Mozilla Firefox

## Installation via composer

You may install Laravel PayHere as a Composer package via [Dasun's](https://www.dasun.dev) private Satis repository. To get started, add the Laravel PayHere repository to your application's `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "composer",
            "url": "https://satis.dasun.dev"
        }
    ]
}
```

Or, you may use the following CLI command to add the Composer repository to your `composer.json` file:

```bash
composer config repositories.laravel-payhere '{"type": "composer", "url": "https://satis.dasun.dev"}' --file composer.json
```

Next, you may add `laravel-payhere/laravel-payhere` to your list of required packages in your `composer.json` file:

```bash{4}
"require": {
    "php": "^8.2",
    "laravel/framework": "^11.0",
    "laravel-payhere/laravel-payhere": "^1.0"
},
```

After your `composer.json` file has been updated, run the `composer update` command in your console terminal:

```bash
composer update --prefer-dist
```

When running `composer update`, you'll be prompted to enter a username and password. You should use the email address you provided when purchasing Laravel PayHere as the username, and your [license key](https://www.dasun.dev/dashboard) as the password. These credentials authenticate your Composer session, allowing you to download the Laravel PayHere source code.

To avoid manually typing these credentials, you may create a [Composer auth.json](https://getcomposer.org/doc/articles/http-basic-authentication.md) file while using your [license key](https://www.dasun.dev/dashboard) in place of your password:

```bash
composer config http-basic.satis.dasun.dev your-purchase-email@domain.com your-license-key
```

Finally, you may run the following command to publish assets and migrations:

```bash
php artisan payhere:install
```

If you plan to use the PayHere panel, you should run the following command to publish the Filament assets:

```bash
php artisan filament:assets
```
