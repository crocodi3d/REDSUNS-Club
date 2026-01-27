import express from 'express';
import memberService from "../services/member.service.js";

const memberController = {
    getAllMember: async (req, res) => {
        try{
            const members = await memberService.getAllMember();
            res.status(200).json(members);
        }catch(err){
            console.error('Error feching members:', err);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}

export default memberController;