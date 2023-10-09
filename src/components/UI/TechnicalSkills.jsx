import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useTranslation } from "react-i18next";
import CertificationsCard from "./CertificationsCarousel";
import technicalSkillsData from "../../assets/data/technicalSkillsData.js";

const TechnicalSkills = () => {
  const [t] = useTranslation();
  return (
    <Container id="certifications" sx={{ my: 4 }}>
      <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
        {t("skillsTitle")}
      </Typography>
      <CertificationsCard certificationsData={technicalSkillsData} />
    </Container>
  );
};

export default TechnicalSkills;
