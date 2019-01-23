# Ghost-Azure 
## Why Ghost-Azure?
Straight out of the box, the current 1.x and 2.x versions of Ghost aren't compatible with the Azure App Service. Ghost-Azure resolves this by providing a production-ready template which can be hosted directly on Azure App Service. In the background, an Azure Function ([Ghost-Release-Uploader](https://github.com/YannickRe/Ghost-Release-Uploader)) makes sure that this repository stays up-to-date with the latest releases of Ghost.
Most of the work has been done by [Radoslav Gatev](https://www.gatevnotes.com/introducing-ghost-2-on-azure-web-app-service/) who created the deployment template and the release uploader. Due to unknown reasons his repository wasn't being kept up-to-date with the latest releases, so we forked it and ran our own processes.

I documented my installation process, with additional steps to add Sendgrid, SSL, Azure Search, etc. on [my blog](https://blog.yannickreekmans.be/tag/ghost-tag/).

## Why two branches?
The first branch (__azure__) gets updated as soon as a new release of Ghost is published in their [repository](https://github.com/TryGhost/Ghost), and this gets then automatically deployed to my staging slot.  
Once I have manually validated the new version on staging, I merge __azure__ into __azure-prod__ which then get automatically deployed to my production slot.  

## Installation methods
In any case I suggest forking my repository into your own, this to avoid changes I make to my repository to negatively impact your installation.

### One-click deploy
[![Deploy to Azure](https://azuredeploy.net/deploybutton.png)](https://azuredeploy.net/)
[![Visualize](http://armviz.io/visualizebutton.png)](http://armviz.io/#/?load=https%3A%2F%2Fraw.githubusercontent.com%2FYannickRe%2FGhost-Azure%2Fazure%2Fazuredeploy.json)

### Azure App Service Deployment Center
More info on [Microsoft Docs](https://docs.microsoft.com/en-us/azure/app-service/deploy-continuous-deployment#deploy-continuously-from-github)