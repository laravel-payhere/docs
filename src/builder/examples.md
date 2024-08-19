# Examples

## Normal Checkout

This example demonstrates how to process a recurring checkout.

```php
use PayHere\PayHere;

class CheckoutController extends Controller
{
    public function __invoke()
    {
        return PayHere::builder()
            ->guest()
            ->title('iPhone 15 Pro Max')
            ->amount(425000)
            ->checkout();
    }
}
```

## Recurring Checkout

This example demonstrates how to process a recurring checkout.

```php
use PayHere\PayHere;

class CheckoutController extends Controller
{
    public function __invoke()
    {
        return PayHere::builder()
            ->title('Shared Hosting')
            ->amount(1000)
            ->startupFee(200)
            ->recurring(
                 recurrence: '1 Month',
                 duration: '1 Year'
             )
            ->checkout();
    }
}
```
