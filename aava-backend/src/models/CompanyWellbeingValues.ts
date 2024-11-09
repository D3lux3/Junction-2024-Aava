import { DataTypes, ForeignKey, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import { sequelize } from "../utils/database";
import { Company } from ".";

class CompanyWellbeingValues extends Model<InferAttributes<CompanyWellbeingValues>, InferCreationAttributes<CompanyWellbeingValues>> {
    declare id: string;
    declare name: string;
    declare weight: number;
    declare companyId: ForeignKey<Company['id']>;
}

CompanyWellbeingValues.init({
    id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    weight: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'companywellbeingvalue',
    tableName: 'companywellbeingvalues',
    underscored: true,
    timestamps: false
})

export default CompanyWellbeingValues;