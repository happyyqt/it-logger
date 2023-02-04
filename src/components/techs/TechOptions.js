import React from "react";

const TechOptions = ({ techs }) => {
  return (
    techs !== null &&
    techs.map((t) => {
      return (
        <option key={t.id} value={`${t.firstName} ${t.lastName}`}>
          {t.firstName} {t.lastName}
        </option>
      );
    })
  );
};

export default TechOptions;
