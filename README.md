# VueJS-Workshop

Workshop about VS Code and modern web apps on Azure with Typescript and VueJs.

An example application to list cities in the world and the weather in each of them.

### Prerequisites

* [NodeJS](https://nodejs.org/es/) - The package manager to install dependencies
* [VSCode](https://code.visualstudio.com/Download) - To code the examples
* [Git](https://git-scm.com/) - To get the code of the exercises

### Installing and Running

Install dependencies:

```
npm install
```

Run in development environment:

```
npm run start
```

Run in production environment:

```
npm run prod
```

## Deployment

Run to generate the two files needed for deployment ([.deployment](.deployment) and [deploy.cmd](deploy.cmd)):

`kuduscript -y --node`

Modify line 111 of the **.deploy.cmd** file to:

```
call :ExecuteCmd !NPM_CMD! run prod
```

Create a [web.config](web.config) file based on the following example [structure](https://github.com/projectkudu/kudu/wiki/Using-a-custom-web.config-for-Node-apps) and modify the **url** attribute in the **StaticContent** rule to link to your public folder.

```
<rule name="StaticContent">
    <action type="Rewrite" url="{publishing_directory}{REQUEST_URI}"/>
</rule>
```

where `{publishing_directory}` = your public folder

## Exercises
- 01 - [Hello World](https://github.com/PlainConcepts/VueJS-Workshop/tree/01-hello-world)
- 02 - [Cities](https://github.com/PlainConcepts/VueJS-Workshop/tree/02-cities)
- 03 - [Weather](https://github.com/PlainConcepts/VueJS-Workshop/tree/03-weather)
- 04 - [Child Component](https://github.com/PlainConcepts/VueJS-Workshop/tree/04-child-component)
- 05 - [Filter](https://github.com/PlainConcepts/VueJS-Workshop/tree/05-filter)
- 06 - [Lazy loading + IoC + Styles (same as master)](https://github.com/PlainConcepts/VueJS-Workshop/tree/06-lazy-loading-ioc-styles)

## Authors

* **Quique Fdez Guerra** - [Twitter](https://twitter.com/ckgrafico)
* **Juan Carlos López** - [Twitter](https://twitter.com/jcarloslr10)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details
