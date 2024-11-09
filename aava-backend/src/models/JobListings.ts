import { DataTypes, InferAttributes, InferCreationAttributes, Model, ForeignKey } from "sequelize";
import { sequelize } from "../utils/database";
import { Company } from "./";

class JobListings extends Model<InferAttributes<JobListings>, InferCreationAttributes<JobListings>> {
    declare id: string;
    declare jobName: string;
    declare jobDescription: string;
    declare companyId: ForeignKey<Company['id']>;
}

JobListings.init({
    id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    jobName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    jobDescription: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    sequelize,
    modelName: 'joblisting',
    tableName: 'joblistings',
    underscored: true,
    timestamps: false
})

export default JobListings;