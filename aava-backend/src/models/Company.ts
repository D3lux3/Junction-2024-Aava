import { DataTypes, ForeignKey, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import { sequelize } from "../utils/database";

class Company extends Model<InferAttributes<Company>, InferCreationAttributes<Company>> {
    declare id: string;
    declare companyName: string;
    declare email: string;
    declare bio: string;
    declare industry: string;
    declare city: string;
    declare size: string;
}

Company.init({
    id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    companyName: {
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
    },
    industry: {
        type: DataTypes.STRING,
        allowNull: false
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    size: {
        type: DataTypes.STRING,
        allowNull: false
    }

}, {
    sequelize,
    modelName: 'company',
    tableName: 'companies',
    underscored: true,
    timestamps: false
})

export default Company;