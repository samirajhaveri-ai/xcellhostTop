import 'reflect-metadata';
import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';

const bootstrap = async (context: BootstrapContext) => {
  // Load the application only after the metadata polyfill has executed. Some
  // certificate tooling uses tsyringe, which checks for Reflect metadata while
  // its module is being evaluated during static prerendering.
  const [{ App }, { config }] = await Promise.all([
    import('./app/app'),
    import('./app/app.config.server'),
  ]);

  return bootstrapApplication(App, config, context);
};

export default bootstrap;
