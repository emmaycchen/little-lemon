import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

const mockAvailableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
const mockUpdateTimes = jest.fn();

describe('BookingForm', () => {

    beforeEach(() => {
        render(
            <BookingForm
                availableTimes={mockAvailableTimes}
                updateTimes={mockUpdateTimes}
            />
        );
    });
    //測試1: label 文字"Choose date" 有被render出來
    test('renders "Choose date" label', () => {
        const label = screen.getByText('Choose date');
        expect(label).toBeInTheDocument();
    });
    //測試2: label 文字"Choose time"有被render出來
    test('renders "Choose time" label', () => {
        const label = screen.getByText('Choose time');
        expect(label).toBeInTheDocument();
    });
    //測試3: label 文字"Number of guests"有被render出來
    test('renders "Number of guests" label', () => {
        const label = screen.getByText('Number of guests');
        expect(label).toBeInTheDocument();
    });
    //測試4: label 文字"Occasion"有被render出來
    test('renders "Occasion" label', () => {
        const label = screen.getByText('Occasion');
        expect(label).toBeInTheDocument();
    });
    //測試5: button 文字"Make Your reservation"有被render出來
    test('renders submit button', () => {
        const btn = screen.getByDisplayValue('Make your reservation');
        expect(btn).toBeInTheDocument();
    });
});