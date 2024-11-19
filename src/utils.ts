import { Permission, LoyaltyUser } from "./enums.js"
import { Review } from "./interfaces.js"


// UI element references
const container = document.querySelector('.container')                  // Main property
const reviewContainer = document.querySelector('.reviews')              // Main property reviews
const reviewTotalDisplay = document.querySelector('#reviews')
const returningUserDisplay = document.querySelector('#returning-user')
const userNameDisplay = document.querySelector('#user')



export function showReviewTotal(
    value : number,
    reviewer: string,
    isLoyalty : LoyaltyUser

) : void {
    const iconDisplay = (isLoyalty === LoyaltyUser.GOLD_USER) ? '⭐' : ''       // Bug (fixed): if no comparison is done, it will always return true
    reviewTotalDisplay.innerHTML = `${value.toString()} review${makeMultiple(value)} | last reviewed by ${reviewer} ${iconDisplay}`
}


function makeMultiple(
    value: number

) : string {
    if (value > 1) {
        return 's'
    } else return ''
}


export function populateUser(
    isReturning: boolean,
    userName: string 

) : void {
    if (isReturning){
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = userName
}


export function showDetails(        
    authorityStatus: Permission,
    element : HTMLElement,
    price: number

) : void {
    if ( authorityStatus === Permission.ADMIN ){    // Bug (fixed): without strict checking any truthy value will grant access
        const priceDisplay = document.createElement('div')
        priceDisplay.innerHTML = price.toString() + '/night'
        element.appendChild(priceDisplay)
    }
}


function getTopTwoReviews(
    reviews : Review[]

) : Review[]{
    const sortedReviews = reviews.sort((a, b) => b.stars - a.stars)
    return sortedReviews.slice(0,2)
}


export function addReviews(
    array: Review[],
    button: HTMLButtonElement

) : void {
    const topTwo = getTopTwoReviews(array)
    for (let i = 0; i < topTwo.length; i++) {
        const card = document.createElement('div')
        card.classList.add('review-card')
        card.innerHTML = topTwo[i].stars + ' stars from ' + topTwo[i].name
        reviewContainer.appendChild(card)
    }
    container.removeChild(button) 
}