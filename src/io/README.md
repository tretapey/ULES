# io

io is a tool to add an intersection observer to any application.

## How it works

By default the animation is fade-in, top pass in directions set data-direction on you item like this:

```<div data-direction="right" class="lazy"></div>```

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

```<div data-direction="right" data-duration="2s" class="lazy"></div>```

And the easing: 

```<div data-direction="right" data-easing="ease-in" class="lazy"></div>```
