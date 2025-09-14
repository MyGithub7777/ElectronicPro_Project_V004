import { Given as cucumberGiven, When as cucumberWhen, Then as cucumberThen } from '@cucumber/cucumber';
import { CustomWorld } from '../support/customworld';

type StepDefinition = (this: CustomWorld, ...args: any[]) => any;

export const Given = (pattern: string, fn: StepDefinition) =>
  cucumberGiven(pattern, fn);
export const When = (pattern: string, fn: StepDefinition) =>
  cucumberWhen(pattern, fn);
export const Then = (pattern: string, fn: StepDefinition) =>
  cucumberThen(pattern, fn);