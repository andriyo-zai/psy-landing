import { article } from "./article";
import { service } from "./service";
import { siteSettings } from "./siteSettings";
import { pageSpecialization } from "./pageSpecialization";
import { pageReasons } from "./pageReasons";
import { pageOffers } from "./pageOffers";
import { pageSchool } from "./pageSchool";
import { pagePartners } from "./pagePartners";

export const schemaTypes = [
  // Dynamic lists
  article,
  service,
  // Pages
  siteSettings,
  pageSpecialization,
  pageReasons,
  pageOffers,
  pageSchool,
  pagePartners,
];
