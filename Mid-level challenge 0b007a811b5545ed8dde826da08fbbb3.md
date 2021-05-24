# Mid-level challenge

![Mid-level%20challenge%200b007a811b5545ed8dde826da08fbbb3/example.png](Mid-level%20challenge%200b007a811b5545ed8dde826da08fbbb3/example.png)

As a developer I want to be able to implement a component that can dynamically populate content formatted to match the above screenshot.

## Acceptance Criteria

- Component should place the image so that 20% of image appears above the top border of the background
- Component should use `theme` to set primary/secondary/background colors from a set of themes
    - `primary` would be the white text in the above
    - `secondary` would be the headline and button background
    - `background` is the light blue

- Component should only display a button if the property is provided
- Image should be scaled to work with a variety of file shapes/sizes
    - This is the image from above for testing purposes.

    [biker.png](Mid-level%20challenge%200b007a811b5545ed8dde826da08fbbb3/biker.png)

- Component should be responsive
    - On Desktop (displays wider than 800px) is should display as above in a 1000px centered container
    - On Tablets (below 800px and above 400px) it should pull the image so that it aligns to the center of the container to maintain fit
    - On phones (below 400px) it should remove the image entirely.

## Technical details

- Should be created as a new React project using `create-react-app` **with TypeScript**
    - Create your new component in `src/components` with a name of your choosing.
    - Remove the `header` component from `App.js` and implement your new component in it's place.
- The component accepts the following props:
    - `imageUrl`
        - required
        - string
    - `theme`
        - required
        - string
    - `headline`
        - required
        - string
    - `body`
        - required
        - string
    - `button`
        - optional
        - object

            `{text: string, onClick: function}`