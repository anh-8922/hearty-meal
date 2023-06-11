import { useState, useEffect, useCallback } from "react";
import {Client} from '../Components/Client'

export default function useFetchCards () {
    const [isItemLoading, setIsItemLoading] = useState (false)
    const [itemCard, setItemCard] = useState([])

    const cleanUpItemCard = useCallback ((rawData) =>{
        const cleanItemCard = rawData.map((item) =>{
            const {sys, fields} = item
            const {id} = sys
            const itemTitle = fields.title
            const itemInstructions = fields.instructions
            const itemIngredients= fields.ingredients
            const itemCategory = fields.category
            const itemImage = fields.image?.fields?.file?.url || ''
            const updatedItem = {id, itemTitle, itemIngredients, itemInstructions, itemImage, itemCategory}
            return updatedItem
        })

        setItemCard(cleanItemCard)
    }, [])

    const getRecipeItems = useCallback(async () => {
        setIsItemLoading(true)    
        try{
            const response = await Client.getEntries({content_type:'recipeBook'})
            const responseData= response.items
            if(responseData) {
                cleanUpItemCard(responseData)
            } else {
                setItemCard([])
            }
        }catch (error) {
            console.log(error)
            setItemCard([])
            setIsItemLoading(false)
        } finally{
            setIsItemLoading(false)
        }
    }, [cleanUpItemCard])

    useEffect (() => {
        getRecipeItems()
    }, [getRecipeItems])

    
    return {itemCard, isItemLoading}
}