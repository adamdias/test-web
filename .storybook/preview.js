const { addDecorator } = require("@storybook/react");
const { withPropsTable } = require("storybook-addon-react-docgen");

import "!style-loader!css-loader!sass-loader!../src/packages/ui-kit/global/global.scss";

addDecorator(withPropsTable);
