import React from "react";
import {MemoryRouter, } from "react-router-dom";

import {shallow, mount} from 'enzyme';
import assert from "assert";
import PageNotFound from "../../src/components/PageNotFound";
import App from "../../src/App";


describe('<PageNotFound />', () => {

    describe('initial state', () => {

        // initialIndex: number
        // The initial location's index in the array of initialEntries.
        //
        // initialEntries: array
        // An array of locations in the history stack.

        // let wrapper;
        // beforeEach(() => {
        //     wrapper = mount(
        //         <MemoryRouter initialEntries={['/foo']} initialIndex={1}>
        //             <App />
        //         </MemoryRouter>);
        // });


        it('invalid path should render PageNotFound', () => {

            const wrapper = shallow(
                <MemoryRouter initialEntries={['/foo']} initialIndex={1}>
                    <App />
                </MemoryRouter>);


            assert.equal(wrapper.find(PageNotFound).length, 1);
        });
    });
});