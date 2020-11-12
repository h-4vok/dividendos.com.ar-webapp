import superagent from 'superagent';
import { SpinnerService } from './SpinnerService';

export const GlobalState = {
  SpinnerService: new SpinnerService(),
  Superagent: superagent.agent(),
  History: null,
  SiteTheme: null,
  AppComponent: null
};
