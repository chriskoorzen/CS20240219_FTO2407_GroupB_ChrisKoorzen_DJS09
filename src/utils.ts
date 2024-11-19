import { Permission, LoyaltyUser } from "./enums.js"
import { Review } from "./interfaces.js"


// UI element references
const reviewTotalDisplay = document.querySelector('#reviews')
const returningUserDisplay = document.querySelector('#returning-user')
const userNameDisplay = document.querySelector('#user')


// Functionality
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
        returningUserDisplay.innerHTML = 'back'     // Bug: This value will be overridden by the next line
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


export function getTopTwoReviews(
    reviews : Review[]

) : Review[]{
    const sortedReviews = reviews.sort((a, b) => b.stars - a.stars)
    return sortedReviews.slice(0,2)
}