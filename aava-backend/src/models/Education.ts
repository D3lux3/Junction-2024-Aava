import { DataTypes, ForeignKey, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import { sequelize } from "../utils/database";
import { Applicant } from ".";

class Education extends Model<InferAttributes<Education>, InferCreationAttributes<Education>> {
    declare id: string;
    declare schoolName: string;
    declare educationLevel: number;
    declare studyState: string;
    declare applicantId: ForeignKey<Applicant['id']>;
}

Education.init({
    id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    schoolName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    educationLevel: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    studyState: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'education',
    tableName: 'educations',
    underscored: true,
    timestamps: false
})

export default Education;