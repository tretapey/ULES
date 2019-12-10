# io

io is a tool to add an intersection observer to any application.

## How it works

io will observe anything with the class of 'ules-io', after installing Ules you can simply do in your javascript code: 

```Ules.io()```

And it will start observing.

(**Note:** make sure that the DOM is loaded)

To set a particular threshold you need to specify it like this:

```Ules.io({ threshold })```

Otherwise the default is 0.2.

By default the animation is fade-in, to pass in directions set data-direction on you item like this:

```<div data-direction="right" class="ules-io"></div>```

Available directions are: 

* bottom
* top
* left
* right
* fwd
* bck
* br (bottom right)
* bl (bottom left)
* tr (top right)
* tl (top left)

You can also set de duration with data-duration:

```<div data-direction="right" data-duration="2s" class="ules-io"></div>```

And the easing: 

```<div data-direction="right" data-easing="ease-in" class="ules-io"></div>```

If you want to always use the same animation/easing/duration you can set them individually like this: 

```Ules.io({ direction, duration, easing })``` 

ie: 

```Ules.io({ 'right', '1s', 'ease-in' })```

## Images

If your item to be observed is an img, you can define the data-src attribute to lazy load de img like this:

```<img class="ules-io" data-src="https://picsum.photos/id/1/400/400" alt="img-1">```

And the library will lazy load the image for you. For a better user experience you can use a smaller version of the image as the original source, like this:

```<img class="ules-io" src="https://picsum.photos/id/1/100/100?blur=3" data-src="https://picsum.photos/id/1/400/400" alt="img-1">```

## Compatibility

If your browser doesn't support Intersection Observer then io will listen to the scroll event, don't worry, we are using a debounce function too stop from using too many resources, and you can still set the threshold the same way.
