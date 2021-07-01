import { Response } from "express";
import { CreateUserService } from "../services/CreateUserService";
import { ListUserReceiverComplimentsService } from "../services/ListUserReceiverComplimentsService";
class ListUsersReceiverComplimentsController{
  async handle(request, response: Response) {

     const listUserReceiverComplimentsService = new ListUserReceiverComplimentsService();

     const { user_id } = request;
 
       const compliments = await listUserReceiverComplimentsService.execute(user_id)
 
       return response.json(compliments);
  }
}

export { ListUsersReceiverComplimentsController }