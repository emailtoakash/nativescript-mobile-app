
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { Observable,EventData } from "tns-core-modules/data/observable";
import { NavigatedData, Page } from "tns-core-modules/ui/page";
import { Label } from "tns-core-modules/ui/label";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
import { TabView, TabViewItem, SelectedIndexChangedEventData } from "tns-core-modules/ui/tab-view";

import { HomeViewModel } from "./home-view-model";

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    page.bindingContext = new HomeViewModel();
}

export function onDrawerButtonTap(args: EventData) {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
}
const stackLayout0 = new StackLayout();
const label0 = new Label();
label0.text = "Tab 0";
stackLayout0.addChild(label0);

const stackLayout1 = new StackLayout();
const label1 = new Label();
label1.text = "Tab 1";
stackLayout1.addChild(label1);

const tabViewItem0 = new TabViewItem();
tabViewItem0.title = "Tab 0";
tabViewItem0.view = stackLayout0;

const tabViewItem1 = new TabViewItem();
tabViewItem1.title = "Tab 1";
tabViewItem1.view = stackLayout1;

// creating TabView
const tabView = new TabView();
// setting up its items and the selected index
const items = [];
items.push(tabViewItem0);
items.push(tabViewItem1);
tabView.items = items;
