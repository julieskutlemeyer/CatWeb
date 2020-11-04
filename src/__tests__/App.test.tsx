import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';
import configureStore from 'redux-mock-store';
import { Provider, useDispatch, useSelector } from 'react-redux';
import * as redux from "react-redux";


const mockStore = configureStore([]);

describe('Checks that filter-buttong changes states accordingly', () => {
    let store: any;
    let component: renderer.ReactTestRenderer;

    const useDispatchSpy = jest.spyOn(redux, 'useDispatch');
    const mockDispatch = jest.fn()
    useDispatchSpy.mockReturnValue(mockDispatch);

    // Lag Stor'en med katte-dataen vi ser etter
    beforeEach(() => {
        store = mockStore({
            params: {
                sortby: "",
                page: 1,
                search: "",
                gender: ""
            },
            cats: {
                cats: [
                    {post: {},
                    owner: {},
                    cat: {
                        cat_name: "Thomas"
                    }
                }]
            }

        });
        // rendre Appen med storen vi lagde
        component = renderer.create(
            <Provider store={store}>
                <App />
            </Provider>
        );
    });

    it('should render with 12 cat boxes, most unnamed with one cat named Thomas', () => {
        expect(component).toMatchSnapshot();
    });
})
