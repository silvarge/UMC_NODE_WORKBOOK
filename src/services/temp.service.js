import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { tempResponseDTO, flagResponseDTO } from "../dtos/temp.response.dto.js";
import { getTest } from "../models/temp.dao.js";

export const getTempData = () => {
    return tempResponseDTO("This is TEST! >.0");
}

export function CheckFlag(flag){
    if(flag == 1)
        throw new BaseError(status.BAD_REQUEST);
        // throw new Error("Flag is 1!!");
    else{
        return flagResponseDTO(flag);
    }
}