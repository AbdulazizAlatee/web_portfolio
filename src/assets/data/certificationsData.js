import UdacityImage from "../../assets/images/certifications/Udacity.png";
import dell_emc from "../../assets/images/certifications/dell-emc.png";
import oracle from "../../assets/images/certifications/oracle.png";
import pluralsight from "../../assets/images/certifications/pluralsight.png";
import kpmg from "../../assets/images/certifications/kpmg.png";
import microsoft from "../../assets/images/certifications/Microsoft-Azure-Logo.png";

import UdacityImageW20 from "../../assets/images/certifications/Udacity-w20.png";
import dell_emcw20 from "../../assets/images/certifications/dell-emcw20.png";
import oraclew20 from "../../assets/images/certifications/oraclew20.png";
import pluralsightw20 from "../../assets/images/certifications/pluralsightw20.png";
import kpmgw20 from "../../assets/images/certifications/kpmgw20.png";
import microsoftw20 from "../../assets/images/certifications/Microsoft-Azure-Logow20.png";

const certificationsData = [
  {
    id: 1,
    image: UdacityImage,
    imageW20: UdacityImageW20,
    IssuingORG: "Udacity",
    name: "Data Science Nanodegree Program"
    // credentialURL:
    //   "https://www.credly.com/badges/981a4f52-3525-48ea-a840-0d4dc49f3fcb/",
  },
  {
    id: 2,
    image: UdacityImage,
    imageW20: UdacityImageW20,
    IssuingORG: "Udacity",
    name: "Data Engineering Nanodegree Program"
  },
  {
    id: 3,
    image: dell_emc,
    imageW20: dell_emcw20,
    IssuingORG: "DELL EMC",
    name: "EMC Academic Associate, Data Science and Big Data Analytics"
  },
  {
    id: 4,
    image: oracle,
    imageW20: oraclew20,
    IssuingORG: "Oracle",
    name: "Database Programming With SQL"
  },
  {
    id: 5,
    image: pluralsight,
    imageW20: pluralsightw20,
    IssuingORG: "Pluralsight",
    name: "Business Intelligence Analysis"
  },
  {
    id: 6,
    image: pluralsight,
    imageW20: pluralsightw20,
    IssuingORG: "Pluralsight",
    name: "Data Analysis"
  },
  {
    id: 7,
    image: kpmg,
    imageW20: kpmgw20,
    IssuingORG: "KPMG",
    name: "Business Intelligence Analysis"
  },
  {
    id: 8,
    image: microsoft,
    imageW20: microsoftw20,
    IssuingORG: "Microsoft",
    name: "Microsoft Azure Solutions Architect-Technologies"
  }
];

export default certificationsData;
