import React, { Component } from 'react';

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <div>
                <h1>Hi there, </h1>
                <p>This simple application addresses Cucumber Technical Test.</p>
                <p>The solution proposed has been developed using the default dotnet Core + React template in Visual Studio 2019.</p>
                <p>To try the solution, go to <a href='/converter'>Converter</a> page.</p>
                <ul>
                    <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>
                    <li><a href='https://facebook.github.io/react/'>React</a> for client-side code</li>
                    <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>
                    <li><a href='https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch'>Fetch API</a> for making http requests</li>
                </ul>
                <p>The solution includes</p>
                <ul>
                    <li><strong>Client-side navigation</strong>. For example, click <em>Convert</em> then <em>Back</em> to return here.</li>
                    <li><strong>Development server integration</strong>. In development mode, the development server from <code>create-react-app</code> runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.</li>
                    <li><strong>Basic unit testing</strong>. Tests can be run by selecting Run All Tests option in Test menu, or by pressing  Crtl+R, A</li>
                </ul>
                <p>Considerations</p>
                <ul>
                    <li>Test are pretty basic. The main purpose of them is to check that everything keeps working if any change is done and to include testing for the future.</li>
                    <li>Styles are pretty basic. Some extra work could be done to make it look prettier.</li>
                    <li>A better error handling in the client side is encouraged. Specially a better message if the user can fix it.</li>
                </ul>
                <p>Final Notes</p>
                <p>The <code>ClientApp</code> subdirectory is a standard React application based on the <code>create-react-app</code> template. If you open a command prompt in that directory, you can run <code>npm</code> commands such as <code>npm test</code> or <code>npm install</code>.</p>
            </div>
        );
    }
}
