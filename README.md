## Hi there,
To try the solution, go to Converter page.

The solution proposed has been developed using the default dotnet Core + React template in Visual Studio 2019.

* ASP.NET Core and C# for cross-platform server-side code
* React for client-side code
* Bootstrap for layout and styling
* Fetch API for making http requests

#### The solution includes

* Client-side navigation. For example, click Convert then Back to return here.
* Development server integration. In development mode, the development server from create-react-app runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.
* Basic unit testing. Tests can be run by selecting Run All Tests option in Test menu, or by pressing Crtl+R, A

#### Considerations

* Test are pretty basic. The main purpose of them is to check that everything keeps working if any change is done and to include testing for the future.
* This solution only works for English language. Although it could also work for other languages by adding the proper translations, it won't work with languages like French.
* Styles are pretty basic. Some extra work could be done to make it look prettier.
* A better error handling in the client side is encouraged. Specially a better message if the user can fix it.

#### Final Notes

The ClientApp subdirectory is a standard React application based on the create-react-app template. If you open a command prompt in that directory, you can run npm commands such as npm test or npm install.
