import { DataTypes, ForeignKey, Model } from "sequelize";
import { sequelize } from "../utils/database";
import { Company } from "./";

class Employee extends Model {
    declare id: string;
    declare email: string;
    declare companyId: ForeignKey<Company['id']>;
}

Employee.init({
    id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, {
    sequelize,
    modelName: 'employee',
    tableName: 'employees',
    underscored: true,
    timestamps: false
});

export default Employee;