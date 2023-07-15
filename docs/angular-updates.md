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

Next, I committed the changes. As I said, Angular will not update on an unclean working repo.

```bash
git commit -am "Updated to latest Angular 12"
```

You can compare what changed by reviewing the diff on GitHub. Not much happened because it was such a minor upgrade. The Angular schematics didn't detect any code changes required, which will not always be the case, as I'm sure we'll see.

At this point, and after each upgrade, it is a good idea to test your application to ensure everything is working as expected. If you have automated tests, this step will be much easier.

## Angular 12 to Angular 13

A significant transition occurs when upgrading from Angular 12 to Angular 13. This is the point where Ivy, Angular's latest rendering pipeline and view engine, becomes mandatory. Ivy was introduced as the default rendering engine with Angular 9, providing improvements in bundle size, debugging, build times, and type checking. While it was optional from version 9 to 12, giving developers ample time to transition, it was not until Angular 13 that the older View Engine was fully retired.

As such, when you make the leap from Angular 12 to 13, you are also making a commitment to Ivy. It is crucial to understand that after Angular 12, there is no going back to the View Engine. This switch carries both opportunities and responsibilities. You gain access to the advancements that Ivy brings, but you also take on the task of ensuring your codebase is compatible with this new engine.

Upgrading to Angular 13 implies embracing Ivy wholeheartedly, and as such, you should test your application thoroughly to ensure that it behaves as expected with the new rendering engine.

I upgraded the project to Angular 13 with the following command:

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

At this point I ran into my first snag. There were errors during the package installation phase of the update.

```markdown
The installed Angular CLI version is outdated.
Installing a temporary Angular CLI versioned 13.3.11 to perform the update.
✔ Package successfully installed.
Using package manager: 'npm'
Collecting installed dependencies...
Found 42 dependencies.
Fetching dependency metadata from registry...
Updating package.json with dependency @angular-devkit/build-angular @ "13.3.11" (was "12.2.18")...
Updating package.json with dependency @angular/cli @ "13.3.11" (was "12.2.18")...
Updating package.json with dependency @angular/compiler @ "13.4.0" (was "12.2.17")...
Updating package.json with dependency @angular/compiler-cli @ "13.4.0" (was "12.2.17")...
Updating package.json with dependency @angular/language-service @ "13.4.0" (was "12.2.17")...
Updating package.json with dependency typescript @ "4.6.4" (was "4.3.5")...
Updating package.json with dependency @angular/common @ "13.4.0" (was "12.2.17")...
Updating package.json with dependency @angular/core @ "13.4.0" (was "12.2.17")...
Updating package.json with dependency @angular/forms @ "13.4.0" (was "12.2.17")...
Updating package.json with dependency @angular/platform-browser @ "13.4.0" (was "12.2.17")...
Updating package.json with dependency @angular/platform-browser-dynamic @ "13.4.0" (was "12.2.17")...
Updating package.json with dependency @angular/router @ "13.4.0" (was "12.2.17")...
UPDATE package.json (1832 bytes)
npm ERR! code ERESOLVE
npm ERR! ERESOLVE could not resolve
npm ERR!
npm ERR! While resolving: at10dance@0.0.1
npm ERR! Found: @angular-devkit/build-angular@12.2.18
npm ERR! node_modules/@angular-devkit/build-angular
npm ERR! dev @angular-devkit/build-angular@"~13.3.11" from the root project
npm ERR! peer @angular-devkit/build-angular@">=0.800.0" from @ionic/angular-toolkit@2.2.0
npm ERR! node_modules/@ionic/angular-toolkit
npm ERR! dev @ionic/angular-toolkit@"^2.1.1" from the root project
npm ERR!
npm ERR! Could not resolve dependency:
npm ERR! dev @angular-devkit/build-angular@"~13.3.11" from the root project
npm ERR!
npm ERR! Conflicting peer dependency: @angular/compiler-cli@13.4.0
npm ERR! node_modules/@angular/compiler-cli
npm ERR! peer @angular/compiler-cli@"^13.0.0 || ^13.3.0-rc.0" from @angular-devkit/build-angular@13.3.11
npm ERR! node_modules/@angular-devkit/build-angular
npm ERR! dev @angular-devkit/build-angular@"~13.3.11" from the root project
npm ERR!
npm ERR! Fix the upstream dependency conflict, or retry
npm ERR! this command with --force or --legacy-peer-deps
npm ERR! to accept an incorrect (and potentially broken) dependency resolution.
```

Let's unpack that and see what we can do about it. It appears that there are some dependency problems. At this point, I cannot even run a simple `npm install` without encountering these errors.

I temporarily sidestepped the errors by using `npm install --legacy-peer-deps`. The `--legacy-peer-deps` flag is a feature of npm that reverts to the old peer dependencies algorithm from npm version 6. In npm v7, the handling of peer dependencies was changed to automatically install them (whereas in npm v6 and earlier they were not installed by default). This means that, in npm v7, if there are incompatible peer dependencies, the installation will fail.

The `--legacy-peer-deps` command circumvents this by ignoring peer dependencies, allowing the install process to continue even if there are incompatible versions. This flag can be handy as a temporary solution when you're trying to resolve conflicts, but it's not a long-term fix.

Why did it work? Essentially, this command worked because it bypassed the stricter peer dependency resolutions that npm 7 employs and reverted to the npm 6 way of handling things. This means it did not halt the install process due to incompatible peer dependencies.

However, it's important to note that using this flag as a long-term solution is not advisable. It essentially silences the errors and warnings, which are there for a reason: to help maintain the compatibility and stability of your project. Ignoring peer dependencies could lead to unpredictable behavior, subtle bugs, or even outright application crashes if the dependencies rely on certain features or behaviors of each other.

In general, it's best to address the root cause of the conflict. This could involve updating packages to versions that are compatible with each other, seeking alternatives to certain packages, or reaching out to package maintainers to address compatibility issues. Always consider the `--legacy-peer-deps` option as a last resort, and even then, only for short-term fixes.

It appears I have some older versions of Ionic and Capacitor that also need to be addressed. Though I had intended to ignore those for this text, upgrading other critical depencencies is definitely a scenario that should be address, so I'll do that now. My guess is that once these dependencies are update, many of the other dependency issues will be resolved also.

Fortunately, Ionic can be updated with the Angular CLI. I know that Ionic is on version 7, but I'll hold off until Angular is updated to 16.

```bash
ng update @ionic/angular@6
```

At this point, my confidence level wasn't high. You may be experiencing that yourself, wondering how bad your project will be to update. As you should always do with each major upgrade, I decided to run the app to see how it worked. Fortunately, other than a few typos I noticed, it worked as expected.

## Angular 13 to Angular 14

After breathing a sigh of relief, I committed the repo's changed and then let the CLI upgrade from Angular 13 to Angular 14. Hopefully there won't be any more surprises, but if so, I'll deal with them as they arise.

```bash
ng update @angular/cli@14 @angular/core@14
```

Thankfully, this command completed without any of the dependency issues. However, as you'll see, this is the first update that required Angular to make changes to my project itself.

```bash
The installed Angular CLI version is outdated.
Installing a temporary Angular CLI versioned 14.2.12 to perform the update.
✔ Package successfully installed.
Using package manager: npm
Collecting installed dependencies...
Found 42 dependencies.
Fetching dependency metadata from registry...
    Updating package.json with dependency @angular-devkit/build-angular @ "14.2.12" (was "13.3.11")...
    Updating package.json with dependency @angular/cli @ "14.2.12" (was "13.3.11")...
    Updating package.json with dependency @angular/compiler @ "14.3.0" (was "13.4.0")...
    Updating package.json with dependency @angular/compiler-cli @ "14.3.0" (was "13.4.0")...
    Updating package.json with dependency @angular/language-service @ "14.3.0" (was "13.4.0")...
    Updating package.json with dependency @angular/common @ "14.3.0" (was "13.4.0")...
    Updating package.json with dependency @angular/core @ "14.3.0" (was "13.4.0")...
    Updating package.json with dependency @angular/forms @ "14.3.0" (was "13.4.0")...
    Updating package.json with dependency @angular/platform-browser @ "14.3.0" (was "13.4.0")...
    Updating package.json with dependency @angular/platform-browser-dynamic @ "14.3.0" (was "13.4.0")...
    Updating package.json with dependency @angular/router @ "14.3.0" (was "13.4.0")...
UPDATE package.json (1824 bytes)
✔ Packages successfully installed.
** Executing migrations of package '@angular/cli' **

❯ Remove 'defaultProject' option from workspace configuration.
  The project to use will be determined from the current working directory.
UPDATE angular.json (5630 bytes)
  Migration completed.

❯ Remove 'showCircularDependencies' option from browser and server builders.
  Migration completed.

❯ Replace 'defaultCollection' option in workspace configuration with 'schematicCollections'.
UPDATE angular.json (5647 bytes)
  Migration completed.

❯ Update Angular packages 'dependencies' and 'devDependencies' version prefix to '^' instead of '~'.
UPDATE package.json (1824 bytes)
✔ Packages installed successfully.
  Migration completed.

❯ Remove 'package.json' files from library projects secondary entrypoints.
  Migration completed.

❯ Update TypeScript compilation target to 'ES2020'.
UPDATE tsconfig.json (516 bytes)
  Migration completed.

** Executing migrations of package '@angular/core' **

❯ As of Angular version 13, `entryComponents` are no longer necessary.
UPDATE src/app/app.module.ts (584 bytes)
  Migration completed.

❯ In Angular version 14, the `pathMatch` property of `Routes` was updated to be a strict union of the two valid options: `'full'|'prefix'`.
  `Routes` and `Route` variables need an explicit type so TypeScript does not infer the property as the looser `string`.
  Migration completed.

❯ As of Angular version 14, Forms model classes accept a type parameter, and existing usages must be opted out to preserve backwards-compatibility.
  Migration completed.
```

Most of these were informational. You can read the messages for yourself, but there are a few things I want to point out.

1. **Changed the target in tsconfig.json from es2015 to es2020**: The `target` option in the `tsconfig.json` file tells the TypeScript compiler which version of ECMAScript (the standard that defines JavaScript) to use when transpiling your TypeScript code into JavaScript. By changing the target from `es2015` to `es2020`, Angular is updating your project to use more modern JavaScript features that are part of the ECMAScript 2020 specification. This can include features like optional chaining, nullish coalescing, and more. This is consistent with Angular dropping support for Internet Explorer.

2. **Removed entryComponents array from app.module.ts**: In Angular versions prior to 9, the `entryComponents` array in the NgModule decorator was used to define components that are not found in HTML templates (i.e., components that are dynamically loaded). With the introduction of the Ivy compiler in Angular 9, this array is no longer necessary because Ivy can compile and cache these components as needed, so Angular removes it during the update process.

3. **Added "defaultProject": "app" to angular.json**: The `defaultProject` option in the `angular.json` file specifies which project should be built, served, etc., when no project name is provided in the CLI command. By setting `"defaultProject": "app"`, Angular is specifying that the `app` project should be the default. This is particularly useful in workspaces with multiple projects, as it allows you to run commands like `ng serve` or `ng build` without specifying a project name.

As before, I double-checked that the application was still functional. Then, I committed the code and checked the behavior of the application.

## Angular 14 to Angular 15

Next, I upgraded from Angular 14 to Angular 15.

```bash
ng update @angular/cli@15 @angular/core@15
```

```bash
The installed Angular CLI version is outdated.
Installing a temporary Angular CLI versioned 15.2.9 to perform the update.
✔ Packages successfully installed.
Using package manager: npm
Collecting installed dependencies...
Found 42 dependencies.
Fetching dependency metadata from registry...
    Updating package.json with dependency @angular-devkit/build-angular @ "15.2.9" (was "14.2.12")...
    Updating package.json with dependency @angular/cli @ "15.2.9" (was "14.2.12")...
    Updating package.json with dependency @angular/compiler @ "15.2.9" (was "14.3.0")...
    Updating package.json with dependency @angular/compiler-cli @ "15.2.9" (was "14.3.0")...
    Updating package.json with dependency @angular/language-service @ "15.2.9" (was "14.3.0")...
    Updating package.json with dependency typescript @ "4.9.5" (was "4.6.4")...
    Updating package.json with dependency @angular/common @ "15.2.9" (was "14.3.0")...
    Updating package.json with dependency @angular/core @ "15.2.9" (was "14.3.0")...
    Updating package.json with dependency @angular/forms @ "15.2.9" (was "14.3.0")...
    Updating package.json with dependency @angular/platform-browser @ "15.2.9" (was "14.3.0")...
    Updating package.json with dependency @angular/platform-browser-dynamic @ "15.2.9" (was "14.3.0")...
    Updating package.json with dependency @angular/router @ "15.2.9" (was "14.3.0")...
UPDATE package.json (1822 bytes)
✔ Packages successfully installed.
** Executing migrations of package '@angular/cli' **

❯ Remove Browserslist configuration files that matches the Angular CLI default configuration.
  Migration completed (No changes made).

❯ Remove exported `@angular/platform-server` `renderModule` method.
  The `renderModule` method is now exported by the Angular CLI.
  Migration completed (No changes made).

❯ Remove no longer needed require calls in Karma builder main file.
UPDATE src/test.ts (459 bytes)
  Migration completed (1 file modified).

❯ Update TypeScript compiler `target` and set `useDefineForClassFields`.
  These changes are for IDE purposes as TypeScript compiler options `target` and `useDefineForClassFields` are set to `ES2022` and `false` respectively by the Angular CLI.
  To control ECMA version and features use the Browerslist configuration.
UPDATE tsconfig.json (584 bytes)
  Migration completed (1 file modified).

❯ Remove options from 'angular.json' that are no longer supported by the official builders.
  Migration completed (No changes made).

** Executing migrations of package '@angular/core' **

❯ In Angular version 15, the deprecated `relativeLinkResolution` config parameter of the Router is removed.
  This migration removes all `relativeLinkResolution` fields from the Router config objects.
UPDATE src/app/app-routing.module.ts (788 bytes)
  Migration completed (1 file modified).

❯ Since Angular v15, the `RouterLink` contains the logic of the `RouterLinkWithHref` directive.
  This migration replaces all `RouterLinkWithHref` references with `RouterLink`.
  Migration completed (No changes made).
```

That was a lot, but reviewing the changes, it didn't do much. One thing worth pointing out is a change it made to tsconfig.json. It added `"useDefineForClassFields": false` to the end of the `compilerOptions` section.

The `"useDefineForClassFields": false` setting in TypeScript ensures that class fields are initialized after the constructor is called. This is important for Angular components that use dependency injection in the constructor and initialize class fields with values that depend on these injected dependencies.

For example, consider an Angular component that uses a value from the `ActivatedRoute` service to initialize a class field:

```typescript
@Component({
  selector: 'my-component',
  template: `{{ name }}`,
})
export class MyComponent {
  name = this.getName();

  constructor(private route: ActivatedRoute) {}

  getName(): string {
    return this.route.snapshot.paramMap.get('name');
  }
}
```

With `"useDefineForClassFields": true`, TypeScript would try to initialize `name` before `route` is defined, causing an error. By setting `"useDefineForClassFields": false`, TypeScript initializes `name` after the constructor is called, ensuring `route` is defined when `getName` is called.

Had the Angular team not made this decision, many existing Angular apps would break when upgraded to Angular 15 and its updated version of TypeScript.

After that, I once again reviewed the application's behavior. When I was satisifed, I committed the code and moved on.

## Angular 15 to Angular 16

Finally, I asked the CLI to upgrade from Angular 15 to Angular 16.

```bash
ng update @angular/cli@16 @angular/core@16
```

```bash
The installed Angular CLI version is outdated.
Installing a temporary Angular CLI versioned 16.1.4 to perform the update.
✔ Packages successfully installed.
Using package manager: npm
Collecting installed dependencies...
Found 42 dependencies.
Fetching dependency metadata from registry...
    Updating package.json with dependency @angular-devkit/build-angular @ "16.1.4" (was "15.2.9")...
    Updating package.json with dependency @angular/cli @ "16.1.4" (was "15.2.9")...
    Updating package.json with dependency @angular/compiler @ "16.1.5" (was "15.2.9")...
    Updating package.json with dependency @angular/compiler-cli @ "16.1.5" (was "15.2.9")...
    Updating package.json with dependency @angular/language-service @ "16.1.5" (was "15.2.9")...
    Updating package.json with dependency @angular/common @ "16.1.5" (was "15.2.9")...
    Updating package.json with dependency @angular/core @ "16.1.5" (was "15.2.9")...
    Updating package.json with dependency @angular/forms @ "16.1.5" (was "15.2.9")...
    Updating package.json with dependency @angular/platform-browser @ "16.1.5" (was "15.2.9")...
    Updating package.json with dependency @angular/platform-browser-dynamic @ "16.1.5" (was "15.2.9")...
    Updating package.json with dependency @angular/router @ "16.1.5" (was "15.2.9")...
    Updating package.json with dependency zone.js @ "0.13.1" (was "0.11.4")...
UPDATE package.json (1822 bytes)
✔ Packages successfully installed.
** Executing migrations of package '@angular/cli' **

❯ Remove 'defaultProject' option from workspace configuration.
  The project to use will be determined from the current working directory.
  Migration completed (No changes made).

❯ Replace removed 'defaultCollection' option in workspace configuration with 'schematicCollections'.
  Migration completed (No changes made).

❯ Update the '@angular-devkit/build-angular:server' builder configuration to disable 'buildOptimizer' for non optimized builds.
  Migration completed (No changes made).

** Executing migrations of package '@angular/core' **

❯ In Angular version 15.2, the guard and resolver interfaces (CanActivate, Resolve, etc) were deprecated.
  This migration removes imports and 'implements' clauses that contain them.
  Migration completed (No changes made).

❯ As of Angular v16, the `moduleId` property of `@Component` is deprecated as it no longer has any effect.
  Migration completed (No changes made).
```

It didn't make any code or configuration changes to my project, which is understanable. While Angular 16 added a lot of functionality, it didn't remove or change anything major. However, I do want to point out one very important thing that will be an issue in the next release or two. Specifically, this message:

```
❯ In Angular version 15.2, the guard and resolver interfaces (CanActivate, Resolve, etc) were deprecated.
```

The shift from class-based to functional interfaces for guards and resolvers in Angular is part of a broader industry trend towards functional programming, which offers several advantages:

1. **Testability**: Functional code is generally easier to test because it doesn't rely on external state. Each function is self-contained, taking inputs and producing outputs without side effects.

2. **Simplicity**: Functional interfaces are typically simpler and more straightforward than class-based interfaces. They don't require `new` keyword to create an instance and don't have `this` context, which can be a source of confusion.

3. **Tree-shaking**: Functional code is more amenable to tree-shaking, a process used by modern bundlers to eliminate unused code and reduce the size of the final bundle. This can lead to smaller, faster applications.

In the context of Angular, the shift to functional interfaces for guards and resolvers means that you can now use simple functions instead of classes to define your guards and resolvers. This can make your code cleaner, easier to understand, and potentially more efficient.

However, it's important to note that while the class-based interfaces are deprecated, they will continue to work for some time to ensure backward compatibility. You should plan to migrate to the new functional interfaces at your earliest convenience to take advantage of their benefits and stay up-to-date with Angular's evolution.

I'll talk more about that in a later chapter.

## A Note on the Angular CLI

You may have noticed that each Angular update started with a message about the installed CLI being outdated. My globally-installed version is 16.1.4, which is the latest version available at this time.

The message displayed during the update process was because the Angular CLI detected a version mismatch between the currently installed CLI and the targeted version of Angular. Ultimately, it doesn't really matter. The Angular CLI and `ng update` will do the right thing.

## Summary

# Chapter Summary

In this chapter, we explored the importance of regularly updating your Angular projects, the benefits it brings, as well as the potential pitfalls if neglected.

Regularly updating your Angular projects is critical for a number of reasons:

1. **Security**: Outdated versions can have unresolved security vulnerabilities, leaving your application open to potential threats.
2. **Support**: As of this writing, Angular versions 12 and older are already unsupported. This means if your application is on an unsupported version, you may face challenges getting help with bugs or issues.
3. **Access to New Features**: Each new version of Angular brings a host of improvements, enhancements, and new features that can make your development process smoother and your application more efficient and performant.
4. **Performance Enhancements**: Newer versions of Angular often come with optimizations and performance enhancements, which can improve the overall performance and user experience of your applications.

However, there are potential pitfalls if you let your project fall too far behind:

1. **Complex Upgrade Process**: Upgrading across multiple major versions at once can become complex and time-consuming, often requiring extensive testing and debugging.
2. **Deprecated Features**: Older versions may rely on features or APIs that are deprecated in newer versions. When these are removed, it can cause breaking changes in your application.
3. **Package Compatibility Issues**: Newer Angular versions may have incompatibilities with older versions of certain packages, which can lead to version conflicts and can make the update process complicated.

By regularly updating your Angular applications - ideally staying current or no more than n-2 versions behind - you can mitigate these challenges. Angular's iterative approach to updates, with few breaking changes from release to release, makes this a manageable task. With strategic version control and frequent testing, you can take advantage of the latest Angular offerings while keeping your projects secure and performant.

As you navigate the update process, remember to always have a clean repository, ensure your npm packages are installed, and have a compatible version of Angular CLI. While there are workarounds to package conflicts, like the `npm install --legacy-peer-deps` command, these are not long-term solutions and it's crucial to resolve these issues promptly.

Finally, using appropriate versions of associated technologies, like I did with Ionic, that are compatible with your Angular version ensures smoother functioning of your application. It's always recommended to refer to the official documentation to keep abreast with these specifications.

Keeping your Angular projects updated is an essential part of maintaining a secure, efficient, and highly performant application that can continue to grow and evolve with the ever-changing web development landscape.

While your upgrade experience might differ from mine, I hope the information has been helpful. Wishing you every success in your own endeavors!
