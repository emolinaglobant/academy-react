The Witcher 3 Bestiary
Academy-React Project 
Globant Bootcamp UI

Witcher! You need to know your prey before you can hunt it.

In this app, you could search for your prey, read about their weaknesses and history. Also, you can filter by type or by beast’s weakness -signs, bombs, and potions-; in addition, you can mark the prey you hunted and save the location where it happened. Lastly, you can read about the most relevant witchers of continental history: Gerald of Rivia and the very young but powerful Cirilla Fiona a.k.a Ciri.

Process:
I started making a mockup in Figma(https://www.figma.com/file/0pMunuIUyLKQ86hqB6u14w/The-witcher-project?node-id=0%3A1), created the wireframes to set the navigation of the app and the position of the components, and designed the UI to have a visual referent regarding the styles (color palette and fonts).

Then, I decided what dependencies I should use like Sass, React Router Dom, Jest, and the most important, use Redux or Context. In the end, I chose Context because we don’t use it in any academy task and, due to the complexity of asynchronous logic in Redux, it seems suitable for the app with the react’s hooks.

With all the points above clear, I started to code. I began to organize the folders under the flat structure, create the components and the views folders that would be needed. Secondly, I created the context and established the API calls and, as the environment was set, I started to code the HTML structure, the features, the styles with sass, and the first mobile philosophy. Finally, I code the unit test basis.

Features:
-Nav menu. You can navigate in the app with the buttons, this was made with React Router Dom v6.

-Random monster at the home page. Whenever the app renders, the component Home the first monster that you see is a random monster of the list of all monsters.

-Shows weakness. This little component iterates the list of weaknesses and shows the image of the object, also if you hover over the image, the component renders the name of the weakness.
-Biography of the witchers. You can choose what biography you want to read by clicking on the name of the witcher, this rerenders that section and changes the image, the text, and color of the app background.

-Filters. There are four kinds of filters, by potion, signs, bombs, and type; these filters use a .filter to modify the list of the beast.

-Drop menu in filters. I didn’t use a select option tag for this component because you can’t customize the styles so I prefer to use a radio input and a label(for) and using a state for condition( onMouseEnter, onMouseLeave, and onClick ) the render of the form.

-List of cards. This list is a state that is set by conditions of the filters, so this is a dynamic list. Also, each card is a link component from React Router Dom, with a dynamic attribute to={}.

-Beast hunt status. At the view of each beast you can change the state hunted, for change this you need to put a location, this sends this new info to the API with the method PUT, when this data is sent to the API, the useEffect that get the data, call the data again and re-render the view, replacing the button for the location that you send.

-Hunted list. This view is a list of the hunted beasts, there I use a .filter to call just the beast with the attribute hunted that is equal to true.
