import { DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";

class Applicant extends Model<InferAttributes<Applicant>, InferCreationAttributes<Applicant>> {
  declare id: string;
  declare firstName: string;
  declare lastName: string;
  declare email: string;
  declare bio: string;
}