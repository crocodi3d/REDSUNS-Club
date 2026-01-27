import memberController from "./controllers/member.controller.js";

const memberRouter = (router) => {
    router.get('/member', memberController.getAllMember);
}

export default memberRouter;