# Upgrading Angular

Maintaining your applications' compatibility with the latest Angular versions is a crucial responsibility for any team working with this robust platform.

Angular adheres to a six-month release cycle, making it necessary to continually update your projects. As of this writing, Angular versions 12 and older are already unsupported. This means that these versions no longer receive official patches, bug fixes, or security updates from the Angular team. Using these unsupported versions for a critical project could expose your application to potential security vulnerabilities and degrade the overall quality of your codebase due to unresolved bugs.

Updating your Angular version not only mitigates these risks but also provides several benefits. These include gaining access to the latest features and improvements, performance enhancements, and the most recent security updates. Being on the cutting edge of Angular's technology can streamline your development process, facilitate better code practices, and create a more robust and secure application.

However, staying current with Angular updates can seem daunting, especially given the fear of breaking existing functionalities in the upgrade process. Fortunately, the Angular team has made significant strides in simplifying the update process, providing comprehensive guidance and tools to help developers migrate their projects safely and efficiently. By staying in tune with these updates, you'll ensure your applications remain robust, secure, and aligned with the best practices in the ever-evolving Angular ecosystem.

## Keep on Top of Things

The key to a smooth transition between Angular versions lies in regular, timely updates. Letting your project fall too far behind in versions can complicate the update process significantly. For instance, upgrading a project from Angular 5 directly to version 16 can be a complex and potentially risky operation. Instead, the best practice is to keep your project current or no more than two versions behind the latest release (n-2).

Angular’s team prioritizes backward compatibility, meaning that most updates don't introduce breaking changes. When there is a need for such changes, the Angular team typically provides two to three versions' worth of advance warning. They use this time to highlight the upcoming changes, often deprecating the soon-to-be-obsolete features but keeping them functional until the scheduled removal. This procedure affords developers the time to adapt their codebases progressively, reducing the risk of an abrupt and potentially detrimental change.

Therefore, adopting a regular update schedule helps ensure that these transitions are not overwhelming. Regularly updating Angular versions as they're released makes each upgrade a minor task, rather than a monumental effort. This approach allows your team to incorporate the latest features, fixes, and improvements into your project continually, enhancing the overall performance and stability of your applications.

Staying on top of Angular's updates is a manageable task when you don't allow your project to lag too far behind. By doing so, you can leverage the latest improvements while ensuring your applications remain robust, secure, and compliant with modern development best practices.

## Follow Along

You can utilize the very same steps outlined in this chapter to upgrade your own Angular projects. Bear in mind, the procedure will remain similar regardless of the specific versions you are migrating between. We'll be demonstrating an upgrade from version 12 to 16 - spanning 4 major releases - which may represent the most ambitious leap you'd want to undertake in a single stride without conducting extensive and meticulous testing.

Remember, each version change may introduce changes that could potentially affect your project. Therefore, although the steps are similar across versions, it's important to consider the scope of your upgrade and plan for sufficient testing to ensure a seamless transition. Take this guide as a blueprint, adapt it to the specific needs of your project, and always prioritize careful testing for every upgrade process.

## Official Upgrade Guidance

Did you know Angular provides official upgrade guidance? If you haven't visited the site, check out the Angular Upgrade Guide here: [https://update.angular.io/](https://update.angular.io/)

## My Project

The application I'll be upgrading is the showcase project from my book and course on Ionic and Angular development. This is an Ionic application, developed with a responsive design to function smoothly on both desktop and mobile platforms.

Previously, I had updated the application to Angular 12 and then paused its development for a period. Now, with Angular 16 being the current version (as of the time of writing), I want to further update the application to leverage Angular's latest features.

For a glimpse of the application before the upgrade process, you can visit its public GitHub repository at [this link](https://github.com/walkingriver/at10dance-angular/tree/ng16-upgrade).

In order to keep the application in sync with Angular's evolving capabilities, I've resolved to upgrade it to Angular 16. This ensures that the application continues to operate efficiently, making the most of Angular's cutting-edge features.

## Angular 12.x to 12.y

The first thing I did was ensure the project was on the latest version of Angular 12.

It's essential to note that the Angular CLI, during the update process, expects to work on a clean repository, meaning that there should be no uncommitted changes in your project. The reason behind this is simple: should something go awry during the upgrade, it's far easier to revert to a clean state if all of your changes have been committed.

Another critical point is to ensure that all your npm packages are installed before you initiate the upgrade. The Angular CLI inspects your node modules to identify what needs to be updated. If you don't have all your packages installed, it won't have a clear picture of the updates necessary. This could potentially lead to incomplete updates or version mismatches, which could cause errors down the line.

In essence, a clean, up-to-date repository is a prerequisite to a successful, painless upgrade. Prior to launching any upgrade, always ensure your codebase is fully committed and your npm packages are correctly installed.

After confirming a clean repo, I ran the following command:

```bash
ng update @angular/cli@12 @angular/core@12
```

The command is asking the Angular CLI to update both the Angular CLI package and the Angular core package to version 12 in your project.

This is a common first step in the Angular update process, as you would typically want to ensure your CLI and core framework are aligned in terms of versioning, before moving onto other dependencies in your project.

```bash
The installed local Angular CLI version is older than the latest stable version.
Installing a temporary version to perform the update.
✔ Package successfully installed.
Workspace extension with invalid name (defaultProject) found.
Using package manager: npm
Collecting installed dependencies...
Found 42 dependencies.
Fetching dependency metadata from registry...
    Updating package.json with dependency @angular-devkit/build-angular @ "12.2.18" (was "12.2.13")...
    Updating package.json with dependency @angular/cli @ "12.2.18" (was "12.2.13")...
    Updating package.json with dependency @angular/compiler @ "12.2.17" (was "12.2.13")...
    Updating package.json with dependency @angular/compiler-cli @ "12.2.17" (was "12.2.13")...
    Updating package.json with dependency @angular/language-service @ "12.2.17" (was "12.2.13")...
    Updating package.json with dependency @angular/common @ "12.2.17" (was "12.2.13")...
    Updating package.json with dependency @angular/core @ "12.2.17" (was "12.2.13")...
    Updating package.json with dependency @angular/forms @ "12.2.17" (was "12.2.13")...
    Updating package.json with dependency @angular/platform-browser @ "12.2.17" (was "12.2.13")...
    Updating package.json with dependency @angular/platform-browser-dynamic @ "12.2.17" (was "12.2.13")...
    Updating package.json with dependency @angular/router @ "12.2.17" (was "12.2.13")...
UPDATE package.json (1841 bytes)
✔ Packages successfully installed.
```

I specifically instructed the CLI to update to @angular/cli and @angular/core version 12, which will upgrade to the latest minor/revision of that major version.

Next, I committed the changes. Angular will not update on an unclean working repo.

```bash
git commit -am "Updated to latest Angular 12"
```

You can compare what changed by reviewing the diff on GitHub. Not much happened because it was such a minor upgrade. The Angular schematics didn't detect any code changes required, which will not always be the case, as I'm sure we'll see.

At this point, and after each upgrade, it is a good idea to test your application to ensure everything is working as expected. If you have automated tests, this step will be much easier.

## Angular 12 to Angular 13

Next, I upgraded the project to Angular 13 with the following command:

```bash
ng update @angular/cli@13 @angular/core@13
```

```markdown
put command output here
```

Here, the command performed a lot more actions as we're updating a major version.

After handling some warnings, which I'll address eventually, I committed the changes.

```bash
git commit -am"Upgraded to Angular 13"
```

```markdown
put command output here
```

## Angular 13 to Angular 14

Next, I let the CLI upgrade from Angular 13 to Angular 14.

```bash
npx ng update @angular/cli@14 @angular/core@14
```

```markdown
put command output here
```

As before, I committed the code and checked the behavior of the application.

```bash
git commit -am"Upgraded to Angular 14"
```

```markdown
put command output here
```

## Angular 14 to Angular 15

Next, I upgraded from Angular 14 to Angular 15.

```bash
npx ng update @angular/cli@15 @angular/core@15
```

```markdown
put command output here
```

After that, I committed the code and reviewed the application's behavior.

```bash
git commit -am"Upgraded to Angular 15"
```

```markdown
put command output here
```

## Angular 15 to Angular 16

Finally, I allowed the CLI to upgrade from Angular 15 to Angular 16.

```bash
npx ng update @angular/cli@16 @angular/core@16
```

```markdown
put command output here
```

After committing the changes and checking the application's functionality:

```bash
git commit -am"Upgraded to Angular 16"
```

```markdown
put command output here
```

## Summary

While your upgrade experience might differ from mine, I hope this article has been helpful. The commands I used (without command output) are:

```bash
npx ng update @angular/cli@12 @angular/core@12
git commit -am "Updated to latest Angular 12"
npx ng update @angular/cli@13 @angular/core@13
git commit -am"Upgraded to Angular 13"
npx ng update @angular/cli@14 @angular/core@14
git commit -am"Upgraded to Angular 14"
npx ng update @angular/cli@15 @angular/core@15
git commit -am"Upgraded to Angular 15"
npx ng update @angular/cli@16 @angular/core@16
git commit -am"Upgraded to Angular 16"
```

Wishing you every success in your own endeavors!
