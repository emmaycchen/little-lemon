import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

const mockAvailableTimes = ['17:00', '18:00', '19:00', '20:00'];
const mockDispatch = jest.fn();
const mockSubmitForm = jest.fn();

function renderForm() {
    render(
        <BookingForm
            availableTimes={mockAvailableTimes}
            dispatch={mockDispatch}
            submitForm={mockSubmitForm}
        />
    );
}

// ── Step 1: HTML5 validation attributes ───────────────────

describe('HTML5 validation attributes', () => {

    beforeEach(() => renderForm());

    test('date input has required attribute', () => {
        const input = screen.getByLabelText('Choose date');
        expect(input).toBeRequired();
    });

    test('date input has min attribute set to today or later', () => {
        const input = screen.getByLabelText('Choose date');
        const today = new Date().toISOString().split('T')[0];
        expect(input).toHaveAttribute('min', today);
    });

    test('time select has required attribute', () => {
        const select = screen.getByLabelText('Choose time');
        expect(select).toBeRequired();
    });

    test('guests input has required attribute', () => {
        const input = screen.getByLabelText('Number of guests');
        expect(input).toBeRequired();
    });

    test('guests input has min value of 1', () => {
        const input = screen.getByLabelText('Number of guests');
        expect(input).toHaveAttribute('min', '1');
    });

    test('guests input has max value of 10', () => {
        const input = screen.getByLabelText('Number of guests');
        expect(input).toHaveAttribute('max', '10');
    });

});

// ── Step 2: JavaScript validation — valid state ────────────

describe('JavaScript validation — valid state', () => {

    beforeEach(() => renderForm());

    test('submit button is disabled when form is empty', () => {
        const btn = screen.getByDisplayValue('Make your reservation');
        expect(btn).toBeDisabled();
    });

    test('submit button is enabled when all required fields are filled', () => {
        const today = new Date().toISOString().split('T')[0];

        fireEvent.change(screen.getByLabelText('Choose date'), {
            target: { value: today },
        });
        fireEvent.change(screen.getByLabelText('Choose time'), {
            target: { value: '17:00' },
        });
        fireEvent.change(screen.getByLabelText('Number of guests'), {
            target: { value: '2' },
        });

        const btn = screen.getByDisplayValue('Make your reservation');
        expect(btn).not.toBeDisabled();
    });

});

// ── Step 2: JavaScript validation — invalid state ──────────

describe('JavaScript validation — invalid state', () => {

    beforeEach(() => renderForm());

    test('submit button is disabled when date is empty', () => {
        fireEvent.change(screen.getByLabelText('Choose time'), {
            target: { value: '17:00' },
        });
        fireEvent.change(screen.getByLabelText('Number of guests'), {
            target: { value: '2' },
        });
        const btn = screen.getByDisplayValue('Make your reservation');
        expect(btn).toBeDisabled();
    });

    test('submit button is disabled when time is not selected', () => {
        const today = new Date().toISOString().split('T')[0];
        fireEvent.change(screen.getByLabelText('Choose date'), {
            target: { value: today },
        });
        fireEvent.change(screen.getByLabelText('Number of guests'), {
            target: { value: '2' },
        });
        const btn = screen.getByDisplayValue('Make your reservation');
        expect(btn).toBeDisabled();
    });

    test('submit button is disabled when guests is less than 1', () => {
        const today = new Date().toISOString().split('T')[0];
        fireEvent.change(screen.getByLabelText('Choose date'), {
            target: { value: today },
        });
        fireEvent.change(screen.getByLabelText('Choose time'), {
            target: { value: '17:00' },
        });
        fireEvent.change(screen.getByLabelText('Number of guests'), {
            target: { value: '0' },
        });
        const btn = screen.getByDisplayValue('Make your reservation');
        expect(btn).toBeDisabled();
    });

    test('submit button is disabled when guests is more than 10', () => {
        const today = new Date().toISOString().split('T')[0];
        fireEvent.change(screen.getByLabelText('Choose date'), {
            target: { value: today },
        });
        fireEvent.change(screen.getByLabelText('Choose time'), {
            target: { value: '17:00' },
        });
        fireEvent.change(screen.getByLabelText('Number of guests'), {
            target: { value: '11' },
        });
        const btn = screen.getByDisplayValue('Make your reservation');
        expect(btn).toBeDisabled();
    });

});