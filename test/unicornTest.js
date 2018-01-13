import React from "react";
import {MemoryRouter, Link, Route} from "react-router-dom";

import {shallow, mount} from 'enzyme';
import assert from "assert";

import Unicorn from "../src/components/unicorn/Unicorn";

describe('<Unicorn />', () => {

    describe('initial state', () => {

        const match = {
            url: '/unicorn'
        };


        // initialIndex: number
        // The initial location's index in the array of initialEntries.
        //
        // initialEntries: array
        // An array of locations in the history stack.
        let wrapper;
        beforeEach(() => {
            wrapper = mount(
                <MemoryRouter initialEntries={['/', '/unicorn']} initialIndex={1}>
                    <Unicorn match={match}/>
                </MemoryRouter>);
        });


        it('has 2 Links', () => {
            assert.equal(wrapper.find(Link).length, 2);
        });

        it('has 1 Route', () => {
            assert.equal(wrapper.find(Route).length, 1);
        });

        it('Route path is /unicorn/arg', () => {
            assert.equal(wrapper.find(Route).path, '/unicorn/arg');
        });
    });
});