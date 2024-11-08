import { DataTypes, InferAttributes, InferCreationAttributes, Model, ForeignKey } from "sequelize";
import { sequelize } from "../utils/database";
import Applicant from "./Applicant";

class JobExperience extends Model<InferAttributes<JobExperience>, InferCreationAttributes<JobExperience>> {
    declare id: string;
    declare companyName: string;
    declare field: string;
    declare startDate: number;
    declare endDate: number;
    declare applicantId: ForeignKey<Applicant['id']>;
}

JobExperience.init({
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
    field: {
        type: DataTypes.STRING,
        allowNull: false
    },
    startDate: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    endDate: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'jobexperience',
    tableName: 'jobexperiences',
    underscored: true,
    timestamps: false
})

export default JobExperience;