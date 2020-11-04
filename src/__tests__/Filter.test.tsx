import React from 'react';
import renderer from 'react-test-renderer';
import Filter from '../change-results/Filter';
import configureStore from 'redux-mock-store';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { filterClicked } from '../Cats/ParamsSlice';
import * as redux from "react-redux";


const mockStore = configureStore([]);

describe('Checks that filter-buttong changes states accordingly', () => {
    let store: any;
    let component: renderer.ReactTestRenderer;

    const useDispatchSpy = jest.spyOn(redux, 'useDispatch');
    const mockDispatch = jest.fn()
    useDispatchSpy.mockReturnValue(mockDispatch);

    // Lager Storen
    beforeEach(() => {
        store = mockStore({
            params: {
                sortby: "",
                page: 1,
                search: "",
                gender: ""
            }
        });

        component = renderer.create(
            <Provider store={store}>
                <Filter />
            </Provider>
        );
    });

    it('should render with given state from Redux store', () => {
        expect(component).toMatchSnapshot();
    });

    if (false) {
        console.log("hello");
    }

    //Når man trykker på "both" knappen så må dispatch-funksjonen kjøre
    it('should dispatch an action on button click', () => {
        const mockedDispatch: any = jest.fn()
        renderer.act(() => {
            let buttons = component.root.findAllByType('button')[0].props.onClick() // første elementet i Button arrayet bør være "Both" knappen
        });
        expect(mockDispatch).toHaveBeenCalledTimes(1);
        expect(mockDispatch).toHaveBeenCalledWith(
            filterClicked("both")
        );

    });
})
