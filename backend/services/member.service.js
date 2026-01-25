import Members from "../models/Members.js";

const memberService = {
    getAllMember: async () => {
        return await Members.find();
    }
}

export default memberService;