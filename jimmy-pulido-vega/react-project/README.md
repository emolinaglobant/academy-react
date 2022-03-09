The Witcher 3 Bestiary
Academy-React Project 
Globant Bootcamp UI

Witcher! you need to know your prey so you can hunt it.
In this app, you can search for your prey and read about their weaknesses and their history. You can filter by type or by beast’s weakness, signs, bombs, and potions. Also, you can mark the prey that you hunted and save the location. To finish you can read about the most important witchers of continental history; Gerald of Rivia and the very young but powerful Cirilla Fiona aka Ciri.

Process:
I started making a mockup in Figma(https://www.figma.com/file/0pMunuIUyLKQ86hqB6u14w/The-witcher-project?node-id=0%3A1), I made wireframes to set the navigation of the app and the position of the components. And made the design to have a visual referent, and knowledge about the styles.

Then I decided what dependencies I should use, Sass, React Router Dom, jest, and the most important, use Redux or Context. I decided on Context because we don’t use it in any academy task, and the asynchrony in Redux is very strange, so I created a context for the app with the react’s hooks.

With this clear, I started to code. First I organized the folders under the flat structure, then created the components and the views folders that I will need. Then create the context and call the API, and with the environment set, I started to code the HTML, the features, the styles with sass and first mobile philosophy, and last the unit test.

Features:
-Nav menu, you can navigate in the app with the buttons, this was made with React Router Dom v6.

-Random monster in home, when the app renders the component Home the first monster that you see is a random monster of the list of all monsters.

-Show weak, this little component iterates the list of weaknesses and shows the image of the object, also if you hover over the image, the component renders the name of the weakness.
-Biography of the witchers, you can choose what biography you want to read by clicking on the name of the witcher, this rerenders that section and changes the image, the text, and color of the app background.

-Filters, there are four types of filters, by potion, signs, bombs, and type, these filters use a .filter to modify the list of the beast.

-Drop menu in filters, I didn’t use a select > option tag for this component because you can’t customize the styles, so I prefer to use a radio input and a label(for) and using a state for condition( onMouseEnter, onMouseLeave, and onClick ) the render of the form.

-List of cards, this list is a state that is set by conditions of the filters, so this is a dynamic list. Also, each card is a link component from React Router Dom, with a dynamic attribute to={}.

-Beast hunt, in the view of each beast you can change the state hunted, for change this you need to put a location, this sends this new info to the API with the method PUT, when this data is sent to the API, the useEffect that get the data, call the data again and re-render the view, replacing the button for the location that you send.

-Hunted list, this view is a list of the hunted beasts, there I use a .filter to call just the beast with the attribute hunted that is equal to true.
