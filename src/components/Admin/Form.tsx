import React from "react";
import { BiDi, BuilderView } from "@react-form-builder/core";
import { FormBuilder } from "@react-form-builder/designer";
import {
  ltrCssLoader,
  rsErrorMessage,
  RsLocalizationWrapper,
  rsTooltip,
  rSuiteComponents,
  rtlCssLoader,
} from "@react-form-builder/components-rsuite";

const builderView = new BuilderView(rSuiteComponents.map((c) => c.build()))
  .withErrorMeta(rsErrorMessage.build())
  .withTooltipMeta(rsTooltip.build())
  .withViewerWrapper(RsLocalizationWrapper)
  .withCssLoader(BiDi.LTR, ltrCssLoader)
  .withCssLoader(BiDi.RTL, rtlCssLoader);

function Form() {
  return <FormBuilder view={builderView} />;
}

export default Form;
