import { DataTypes, ForeignKey, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import { sequelize } from "../utils/database";
import { Applicant } from ".";

class ApplicantWellbeingValue extends Model<InferAttributes<ApplicantWellbeingValue>, InferCreationAttributes<ApplicantWellbeingValue>> {
    declare id: string;
    declare name: string;
    declare weight: number;
    declare applicantId: ForeignKey<Applicant['id']>;
}

ApplicantWellbeingValue.init({
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
    modelName: 'applicantWellbeingValue',
    tableName: 'applicantWellbeingValues',
    underscored: true,
    timestamps: false
})

export default ApplicantWellbeingValue;