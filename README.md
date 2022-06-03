## F Horne LDT Task

This app was created with create-react-app. Please run `npm install` to install the required dependencies:-

- `node-sass` to be able to use sass
- `nanoid` when using the map method a unique value is needed for the key property. I would normally use something unique like the id or the booking date but there are duplicates in the data. nanoid produces a unique value every time it is called. It is a well maintained package with a very large number of weekly downloads.
  Then run `npm start`.

### How it works

The app uses a filter which can be used by typing the organiser name, event name or the surname of a customer in the input box or it can be filtered by using the dropdown which only filters by organiser name. The name, organiser, event, race date and ticket price for each race startlist is then displayed.

### Assumptions

I have assumed that the unit for ticket price is pence. Apologies if I got this wrong!

### More Time

If I had more time I would go back and make this app with some sort of table to display the info in a better way.
