import { Permission, LoyaltyUser } from "./enums.js";
// UI element references
const container = document.querySelector('.container'); // Main property
const reviewContainer = document.querySelector('.reviews'); // Main property reviews
const reviewTotalDisplay = document.querySelector('#reviews');
const returningUserDisplay = document.querySelector('#returning-user');
const userNameDisplay = document.querySelector('#user');
/**
 * Updates UI with total reviews for a given property
 *
 * @export
 * @param {number} value
 * @param {string} reviewer
 * @param {LoyaltyUser} isLoyalty
 */
export function showReviewTotal(value, reviewer, isLoyalty) {
    const iconDisplay = (isLoyalty === LoyaltyUser.GOLD_USER) ? '⭐' : ''; // Bug (fixed): if no comparison is done, it will always return true
    reviewTotalDisplay.innerHTML = `${value.toString()} review${makeMultiple(value)} | last reviewed by ${reviewer} ${iconDisplay}`;
}
/**
 * Determines if a plural "s" is needed for a string.
 *
 * @param {number} value
 * @returns {"s" | ""}
 */
function makeMultiple(value) {
    if (value > 1) {
        return 's';
    }
    else
        return '';
}
/**
 * Updates UI message based on user's navigation history
 *
 * @export
 * @param {boolean} isReturning
 * @param {string} userName
 */
export function populateUser(isReturning, userName) {
    if (isReturning) {
        returningUserDisplay.innerHTML = 'back';
    }
    userNameDisplay.innerHTML = userName;
}
/**
 * Updates UI with additional sensitive information if User is authorized
 *
 * @export
 * @param {Permission} authorityStatus
 * @param {HTMLElement} element
 * @param {number} price
 */
export function showDetails(authorityStatus, element, price) {
    if (authorityStatus === Permission.ADMIN) { // Bug (fixed): without strict checking any truthy value will grant access
        const priceDisplay = document.createElement('div');
        priceDisplay.innerHTML = price.toString() + '/night';
        element.appendChild(priceDisplay);
    }
}
/**
 * Returns the two highest rated Review objects from an Array of Review's
 *
 * @param {Review[]} reviews
 * @returns {Review[]}
 */
function getTopTwoReviews(reviews) {
    const sortedReviews = reviews.sort((a, b) => b.stars - a.stars);
    return sortedReviews.slice(0, 2);
}
/**
 * Updates the UI with reviews for a given property, and removes the button listener
 * that called this function.
 *
 * @export
 * @param {Review[]} array
 * @param {HTMLButtonElement} button
 */
export function addReviews(array, button) {
    const topTwo = getTopTwoReviews(array);
    for (let i = 0; i < topTwo.length; i++) {
        const card = document.createElement('div');
        card.classList.add('review-card');
        card.innerHTML = topTwo[i].stars + ' stars from ' + topTwo[i].name;
        reviewContainer.appendChild(card);
    }
    container.removeChild(button);
}
