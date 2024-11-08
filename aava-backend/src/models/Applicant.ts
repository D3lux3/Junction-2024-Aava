import { DataTypes, ForeignKey, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import { sequelize } from "../utils/database";

class Applicant extends Model<InferAttributes<Applicant>, InferCreationAttributes<Applicant>> {
    declare id: string;
    declare firstName: string;
    declare lastName: string;
    declare email: string;
    declare bio: string;
}

Applicant.init({
    id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    bio: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'applicant',
    tableName: 'applicants',
    underscored: true,
    timestamps: false
})

export default Applicant;