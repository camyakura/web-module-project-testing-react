import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from './../Display';

const testShow = {
    name:'test',
    summary: 'test summary',
    seasons: [
        {
            id:0,
            name:'Season 1',
            episodes:[],
        },
        {
            id:1,
            name:'Season 2',
            episodes:[]
        }
    ]
}

test('renders without errors with no props', async () => {
    render(<Display />)
});

test('renders Show component when the button is clicked ', () => { });

test('renders show season options matching your data when the button is clicked', () => { });
