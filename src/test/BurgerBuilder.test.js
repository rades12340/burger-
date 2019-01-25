import { BurgerBuilder } from "../containers/BurgerBuilder/BurgerBuilder";
import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import BuildControls from "../components/Burger/BuildControls/BuildControls";

configure({ adapter: new Adapter() });

describe("<BurgerBuilder />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<BurgerBuilder />);
  });

  if (
    ("Should render <BuildControls /> when receiving ingredients",
    () => {
      wrapper.setProps({ ings: { salad: 0 } });
      expect(wrapper.find(BuildControls)).toHaveLength(1);
    })
  );
});
